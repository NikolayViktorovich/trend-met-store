import { useState } from 'react'
import Toast from './Toast'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' })
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const formatWithMask = (numbers) => {
    if (numbers.length <= 1) return '+7'
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (!numbers) return ''
    const formatted = numbers[0] === '8' ? '7' + numbers.slice(1) : numbers[0] === '7' ? numbers : '7' + numbers
    return formatWithMask(formatted)
  }

  const validatePhone = (phone) => {
    const numbers = phone.replace(/\D/g, '')
    if (numbers.length < 11) return 'Введите полный номер телефона (11 цифр)'
    if (numbers[0] !== '7') return 'Номер должен начинаться с +7'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const error = validatePhone(formData.phone)
    if (error) {
      setPhoneError(error)
      setToast({ show: true, message: error, type: 'error' })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '050f554b-30b4-4769-bebb-44a6a9f1d902',
          subject: 'Новая заявка ТрендМет',
          from_name: formData.name,
          email: 'zakaz@trend-met.ru',
          phone: formData.phone,
          message: formData.comment || 'Не указан',
          to_email: 'zakaz@trend-met.ru'
        })
      })

      const result = await res.json()
      
      if (result.success) {
        setToast({ show: true, message: 'Заявка успешно отправлена', type: 'success' })
        setFormData({ name: '', phone: '', comment: '' })
        setPhoneError('')
        setTimeout(onClose, 2000)
      } else {
        throw new Error(result.message || 'Ошибка отправки')
      }
    } catch (error) {
      setToast({ show: true, message: 'Ошибка отправки заявки. Попробуйте позже', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      setFormData({ ...formData, phone: formatPhoneNumber(value) })
      if (phoneError) setPhoneError('')
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  if (!isOpen) return toast.show ? <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} /> : null

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-900 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0062dd] focus:border-transparent outline-none transition-all disabled:bg-gray-100" placeholder="Ваше имя" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Номер телефона</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required disabled={isSubmitting} className={`w-full px-4 py-3 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#0062dd] focus:border-transparent outline-none transition-all disabled:bg-gray-100`} placeholder="+7 (___) ___-__-__" />
              {phoneError && <p className="mt-1 text-sm text-red-600">{phoneError}</p>}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
              <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} rows="4" disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0062dd] focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100" placeholder="Ваш комментарий..." />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#0062dd] text-white py-3 rounded-full hover:bg-[#0052bb] transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed">
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
        </div>
      </div>
      
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />}
    </>
  )
}

export default ContactModal
