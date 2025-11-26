import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@/index.css'

import { ClienteApp } from '@/modules/cliente/ClienteApp'
import { FinanceiroApp } from '@/modules/financeiro/FinanceiroApp'
import { JuridicoApp } from '@/modules/juridico/JuridicoApp'
import  AdmApp  from '@/modules/adm/AdmApp'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">BoraExpandir - Front Unificado</h1>
        <p className="text-neutral-600">Escolha um portal ou acesse via login central.</p>
        <div className="flex gap-3 justify-center">
          <a href="/cliente" className="px-4 py-2 bg-emerald-600 text-white rounded">Cliente</a>
          <a href="/financeiro" className="px-4 py-2 bg-amber-600 text-white rounded">Financeiro</a>
          <a href="/juridico" className="px-4 py-2 bg-violet-600 text-white rounded">Jurídico</a>
          <a href="/adm" className="px-4 py-2 bg-rose-600 text-white rounded">Admin</a>
        </div>
      </div>
    </div>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente/*" element={<ClienteApp />} />
        <Route path="/financeiro/*" element={<FinanceiroApp />} />
        <Route path="/juridico/*" element={<JuridicoApp />} />
        <Route path="/adm/*" element={<AdmApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = document.getElementById('root')
if (root) createRoot(root).render(<AppRouter />)
