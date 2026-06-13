import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    initials: "LC",
    name: "Luciane Pitao",
    city: "Vinhedo",
    doctor: "Dra. Monalisa & Dr. Rafael",
    rating: 5,
    quote: "Eu que morro de medo de dentista me senti super confortável com eles, não senti nenhuma dor e a cirurgia foi super tranquila. O pós operatório também foi tranquilo. Super recomendo, excelentes profissionais."
  },
  {
    initials: "RN",
    name: "Ronaldo Nascimento",
    city: "Vinhedo",
    doctor: "Dr. Rafael Cidral",
    rating: 5,
    quote: "Efetuei um implante dentário com o Dr. Rafael. O procedimento foi bastante rápido e indolor. Dr. Rafael foi extremamente atencioso e cuidadoso. A recuperação foi excelente, sem dor ou mesmo inchaço local."
  },
  {
    initials: "VK",
    name: "Vanessa Karoliny",
    city: "Vinhedo",
    doctor: "Dra. Monalisa & Dr. Rafael",
    rating: 5,
    quote: "Eu tinha um medo travado. Além do atendimento, da confiança que vocês passaram, a extração foi um sucesso! Quero agradecer ao casal pelo atendimento maravilhoso que recebi."
  },
  {
    initials: "EC",
    name: "Erivânia Cavalcante",
    city: "Campinas",
    doctor: "Dr. Rafael Cidral",
    rating: 5,
    quote: "Estava super ansiosa e tensa, e a experiência foi super tranquila, tanto na cirurgia quanto no pós. Dr. Rafael foi extremamente atencioso, cuidadoso e profissional. Grande profissional!"
  },
  {
    initials: "BB",
    name: "Brenda Rebeca",
    city: "Vinhedo",
    doctor: "Dr. Rafael Cidral",
    rating: 5,
    quote: "Tinha muito medo e ele foi excelente em passar confiança, super atencioso, tomando todos os cuidados, tirando todas as dúvidas, no pré e pós. Experiência desde a avaliação até a cirurgia do dente do siso."
  },
  {
    initials: "KK",
    name: "Karen Bárbosa",
    city: "Vinhedo",
    doctor: "Dr. Rafael Cidral",
    rating: 5,
    quote: "Fiz extração, retratamento de canal e prótese. Um profissional maravilhoso, muito cuidadoso, paciente, se preocupa com todos os detalhes, tem muito cuidado com todo o procedimento."
  },
  {
    initials: "JS",
    name: "Josy Simões",
    city: "Campinas",
    doctor: "Dr. Rafael Cidral",
    rating: 5,
    quote: "Simplesmente demais. Ambiente acolhedor, agradável, profissionalismo nota 10, extremamente competente e o mais importante: comunicativo, transparente e tira todas as suas dúvidas. Apaixonado pelo que faz."
  },
  {
    initials: "RF",
    name: "Rafael Cidral",
    city: "Vinhedo",
    doctor: "Dra. Monalisa Rodrigues",
    rating: 5,
    quote: "Difícil confiar num profissional que faz endodontia. Ela passa muita segurança, mostra muita tranquilidade e passa segurança no tratamento proposto. Com certeza indicarei para outras pessoas!"
  }
];

const metrics = [
  { value: "5,0 ★", label: "Média Google" },
  { value: "50+",   label: "Avaliações verificadas" },
  { value: "2.000+", label: "Casos de canal" },
];

function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      className={styles.card}
      style={{ top: `${88 + index * 6}px`, zIndex: index + 1 }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.05, 0.3),
      }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          {testimonial.initials}
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{testimonial.name}</p>
          <p className={styles.authorCity}>{testimonial.city}</p>
        </div>
        <div className={styles.stars}>
          {'★'.repeat(testimonial.rating)}
        </div>
      </div>

      <p className={styles.quote}>"{testimonial.quote}"</p>

      <p className={styles.doctorTag}>{testimonial.doctor}</p>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.inner}>

        {/* COLUNA ESQUERDA — sticky */}
        <div className={styles.leftCol}>
          <SectionLabel>O que dizem nossos pacientes</SectionLabel>

          <h2 className={styles.headline}>
            Em palavras <em>deles</em>.
          </h2>

          <p className={styles.sub}>
            Mais de 50 avaliações verificadas no Google.
            Todos os pacientes. Média&nbsp;5,0.
          </p>

          <div className={styles.metricsGrid}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.googleBadge}>
            <span className={styles.googleDot} />
            <span>Avaliações verificadas no Google</span>
          </div>
        </div>

        {/* COLUNA DIREITA — cards empilhando */}
        <div className={styles.rightCol}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
