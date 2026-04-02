/**
 * FAQ IDs — ordered list used by the FAQ component.
 * All question/answer text lives in messages/{locale}.json under faq.items.*
 * To add a new FAQ: add the id here AND add the question/answer to all 3 locales.
 */
export const faqIds = [
  'pareja',
  'edad',
  'cuando-empezar',
  'ropa',
  'progresion',
  'individuales',
  'pago',
] as const

export type FaqId = (typeof faqIds)[number]
