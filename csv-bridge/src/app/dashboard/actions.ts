'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

function randomHex(length: number): string {
  const chars = '0123456789abcdef'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

export async function generateApiKey() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Not authenticated' }
  }

  const newKey = `csvb_sk_${randomHex(32)}`

  const { error } = await supabase
    .from('user_settings')
    .upsert({
      id: user.id,
      api_key: newKey,
    })

  if (error) {
    console.error('Error generating API key:', error)
    throw new Error(error.message)
  }

  revalidatePath('/dashboard')
  return { apiKey: newKey }
}

type WebhookActionState = { success: boolean } | { error: string } | null

export async function saveWebhookUrl(prevState: WebhookActionState, formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Not authenticated' }
  }

  const webhookUrl = formData.get('webhookUrl') as string

  const { error } = await supabase
    .from('user_settings')
    .upsert({
      id: user.id,
      webhook_url: webhookUrl,
    })

  if (error) {
    console.error('Error saving webhook URL:', error)
    throw new Error(error.message)
  }

  revalidatePath('/dashboard')
  return { success: true }
}
