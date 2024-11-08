import React from 'react'

interface ResumeProps {
  isMobile: boolean;
}

function Resume({ isMobile }: ResumeProps): JSX.Element {
  return (
    <section>
        <h3>Expériences professionnelles</h3>

<div className="experience">
  <h4>Osmova - Développeur Full Stack</h4>
  <p>
    Lors de ma première expérience dans le digital, j'ai eu l'opportunité de travailler en tant que Développeur Full Stack chez Osmova, une agence digitale montpelliéraine labellisée "French Tech". Ma mission principale a été de développer une application de gestion de clients et de facturation, en utilisant Node.js et Feather.js pour l'API, ainsi que Quasar (Vue.js) et Pinia (l'équivalent de Redux pour Vue.js) pour le front-end.
  </p>
</div>

<div className="experience">
  <h4>Exaprint (groupe VistaPrint) - Développeur Front-End</h4>
  <p>
    Par la suite, j'ai effectué une alternance d'un an chez Exaprint (groupe VistaPrint) en tant que Développeur Front-End au sein de l'équipe Marketing, en collaboration étroite avec le service UI/UX. Mes principales missions consistaient à ajouter de nouvelles fonctionnalités, optimiser continuellement le site, corriger des bugs et analyser les parcours utilisateurs avec ContentSquare pour améliorer l'expérience utilisateur.
  </p>
  <p>
    La majorité de mes interventions se sont faites en React.js v16/TypeScript, mais j'ai également travaillé en PHP pour certaines parties du site.
  </p>
</div>
    </section>
  )
}

export default Resume