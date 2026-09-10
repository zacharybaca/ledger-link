# LedgerLink: Intelligent Client Reconciliation Portal

A multi-tenant SaaS application built on the MERN stack designed to eliminate the friction of client-accountant communication. It features real-time transaction resolution via WebSockets, automated magic-link onboarding, and an AI-powered financial assistant.

## Tech Stack
- **Frontend**: React.js (Vite), Vanilla CSS Modules, React Router, Zustand/Context API, native `fetch` API.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Real-Time & AI**: Socket.IO (live chat), LangChain/LangGraph (RAG assistant).
- **Asset Management**: Cloudinary.
- **Email Services**: Nodemailer / SendGrid.

## Project Structure

```text
ledger-link/
├── .env.example
├── client/
│   ├── src/
│   │   ├── assets/             # Global styles and static images
│   │   ├── components/         # Reusable UI (DataTable, Modals, Buttons)
│   │   ├── features/           # Domain-specific modules (auth, clients, transactions, chat)
│   │   ├── context/            # Global state (AuthContext, SocketContext)
│   │   ├── hooks/              # Custom hooks (useAuth, useSocket)
│   │   ├── pages/              # Route views
│   │   └── services/           # API fetch abstractions
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── config/                 # DB connection, Cloudinary config
│   ├── controllers/            # Route logic
│   ├── middleware/             # Role-based guards, Multer uploads
│   ├── models/                 # Mongoose schemas (AccountingFirm, Company, User, Transaction)
│   ├── routes/                 # Express routes
│   ├── services/               # socketService.js, emailService.js, ragPipeline.js
│   ├── server.js
│   └── package.json
└── package.json





