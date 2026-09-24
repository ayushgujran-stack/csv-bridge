'use client'

import { useState } from 'react'
import { CSVBridge, ExpectedColumn } from '@/components/csv-bridge/CSVBridge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TestWidgetPage() {
  const [apiKey, setApiKey] = useState('')
  const expectedColumns: ExpectedColumn[] = [
    { key: 'first_name', label: 'First Name', required: true },
    { key: 'last_name', label: 'Last Name', required: true },
    { key: 'email', label: 'Email Address', required: true },
    { key: 'company', label: 'Company Name' },
    { key: 'job_title', label: 'Job Title' },
  ]

  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full mb-8 text-center text-[#e3e2e5]">
        <h1 className="text-3xl font-bold mb-4">Test Your Widget</h1>
        <p className="text-zinc-400">
          This is a simulated environment of your customer&apos;s app. The widget below is rendering the 
          <code className="mx-2 text-violet-400 bg-white/5 px-2 py-1 rounded">{'<CSVBridge />'}</code> component.
        </p>
      </div>

      {/* Optional API Key Configuration */}
      <div className="w-full max-w-2xl mb-8 bg-[#14161a] border border-[#23262b] p-6 rounded-xl shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="apiKey" className="text-[#e3e2e5] font-semibold">
            API Key (Optional)
          </Label>
          <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            No login required
          </span>
        </div>
        <p className="text-xs text-zinc-500 mb-3">
          Leave blank to test parsing &amp; direct JSON export, or paste your API key to test backend ingestion.
        </p>
        <Input 
          id="apiKey"
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="csvb_sk_demo_test_key (Optional)"
          className="border-[#23262b] bg-[#1c1f26] text-[#00d4ff] font-mono"
        />
      </div>

      {/* The actual Widget */}
      <div className="w-full max-w-4xl">
        <CSVBridge 
          apiKey={apiKey || 'csvb_sk_demo_preview'} 
          expectedColumns={expectedColumns} 
          onSuccess={() => console.log('Successfully processed CSV data')} 
          onError={(err) => console.error('Import error:', err)} 
        />
      </div>
    </div>
  )
}
