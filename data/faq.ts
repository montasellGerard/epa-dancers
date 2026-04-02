export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'pareja',
    question: '¿Necesito venir con pareja?',
    answer:
      'No, la gran mayoría de nuestros alumnos vienen solos. En clase rotamos de pareja continuamente, así que conocerás a mucha gente y aprenderás a adaptarte a distintos estilos de baile. Venir en pareja es bienvenido, pero nunca es obligatorio.',
  },
  {
    id: 'edad',
    question: '¿Desde qué edad se puede apuntar?',
    answer:
      'Las clases grupales son a partir de 16 años. Si tienes dudas sobre si es adecuado para ti o alguien de tu familia, escríbenos por WhatsApp y te orientamos sin ningún compromiso.',
  },
  {
    id: 'cuando-empezar',
    question: '¿Puedo empezar en cualquier momento del año?',
    answer:
      'Sí. Tenemos incorporación continua en los grupos de iniciación. No es necesario esperar al inicio de temporada: puedes apuntarte cualquier semana y seguir el ritmo desde el primer día.',
  },
  {
    id: 'ropa',
    question: '¿Qué ropa y calzado necesito?',
    answer:
      'Ropa cómoda con la que puedas moverte con libertad. Para el calzado, lo ideal es una suela lisa que deslice (zapatos de baile o zapatillas de suela fina). Evita las suelas de goma gruesa al principio, dificultan los giros.',
  },
  {
    id: 'progresion',
    question: '¿Cuánto tardaré en aprender algo?',
    answer:
      'En las primeras 2-3 clases ya bailarás los pasos básicos y empezarás a sentir el ritmo. La progresión depende de cada persona, pero te prometemos que desde el primer día sales con algo para practicar en casa.',
  },
  {
    id: 'individuales',
    question: '¿Hay clases individuales o solo grupales?',
    answer:
      'Ofrecemos ambas opciones. Las clases grupales son perfectas para empezar y conocer gente. Las individuales o en pareja permiten acelerar la progresión o preparar una coreografía especial. Consúltanos por WhatsApp.',
  },
  {
    id: 'pago',
    question: '¿Cómo funciona el pago? ¿Hay matrícula?',
    answer:
      'El pago es mensual y sin matrícula ni permanencia. Cuatro tarifas según tus clases semanales: 1 clase (30€), 2 clases (50€), 3 clases (65€) o tarifa plana ilimitada (75€). Puedes cambiar de tarifa cada mes.',
  },
]
