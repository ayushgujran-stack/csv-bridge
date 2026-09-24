import { createClient } from '@/utils/supabase/server'
import DashboardClient from './dashboard-client'

export default async function DashboardPage() {
  let initialApiKey = 'csvb_sk_demo_preview_key'
  let initialWebhookUrl = ''
  let userInitials = 'OS'

  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const supabase = await createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        userInitials = user.email ? user.email.substring(0, 2).toUpperCase() : 'ME'
        const { data: settings } = await supabase
          .from('user_settings')
          .select('api_key, webhook_url')
          .eq('id', user.id)
          .single()

        if (settings?.api_key) initialApiKey = settings.api_key
        if (settings?.webhook_url) initialWebhookUrl = settings.webhook_url
      }
    } catch {
      // Fallback gracefully to open-source demo mode
    }
  }

  return (
    <DashboardClient 
      initialApiKey={initialApiKey} 
      initialWebhookUrl={initialWebhookUrl} 
      userInitials={userInitials}
    />
  )
}
