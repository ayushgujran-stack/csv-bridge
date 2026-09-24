# csv-bridge

> A lightweight, drop-in React component for CSV importing with built-in webhook support, header normalization, and secure API handling.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/csv-bridge.svg)](https://www.npmjs.com/package/csv-bridge)

---

## ✨ Features

- ⚡ **Drag & Drop:** Modern, intuitive UI for file uploads.
- 🎯 **Client-Side Parsing:** Fast, in-browser CSV parsing using PapaParse.
- 🌐 **Flexible Endpoints:** Configure your own backend ingestion endpoint or custom destination webhook.
- 🔑 **Bring Your Own Key (BYOK):** Optional API key support sent via `Authorization: Bearer <key>`.
- 💾 **Instant JSON Export:** Users can download cleaned JSON directly if no webhook is specified.
- 🛠️ **TypeScript First:** Complete TypeScript typings included out-of-the-box.
- ⚛️ **Next.js & React Ready:** Works seamlessly in React 18+ and Next.js App Router.

---

## 📦 Installation

```bash
npm install csv-bridge
# or
pnpm add csv-bridge
# or
yarn add csv-bridge
```

---

## 🚀 Quick Start

### Basic Usage

```tsx
import { CSVBridge } from 'csv-bridge'

export default function ImportPage() {
  return (
    <div className="p-8">
      <CSVBridge 
        uploadEndpoint="/api/ingest"
        onSuccess={() => console.log('Import successful!')}
        onError={(err) => console.error('Import failed:', err)}
      />
    </div>
  )
}
```

### With Webhook & API Key (BYOK)

```tsx
import { CSVBridge } from 'csv-bridge'

export default function ImportPage() {
  return (
    <CSVBridge 
      uploadEndpoint="https://api.yourdomain.com/ingest"
      apiKey="csvb_sk_your_api_key"
      webhookUrl="https://hook.us1.make.com/your-webhook-id"
      onSuccess={() => alert('Data imported!')}
    />
  )
}
```

---

## ⚙️ Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `uploadEndpoint` | `string` | `"/api/ingest"` | The backend endpoint where parsed JSON data is posted. |
| `apiKey` | `string` | `""` | Optional API key passed as `Authorization: Bearer <key>`. |
| `webhookUrl` | `string` | `undefined` | Optional default webhook URL destination for the data payload. |
| `expectedColumns` | `ExpectedColumn[]` | `undefined` | Optional array of column specifications `{ key, label, required? }`. |
| `onSuccess` | `() => void` | `undefined` | Callback invoked when import or download succeeds. |
| `onError` | `(error: string) => void` | `undefined` | Callback invoked if upload or validation fails. |

---

## 📄 License

MIT © [CSV Bridge Contributors](LICENSE)
