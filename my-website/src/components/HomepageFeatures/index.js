import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Удобство использование',
    Svg: require('@site/static/img/bomb.svg').default,
    description: (
      <>
        Простой и понятный интерфейс. Ничего лишнего.
      </>
    ),
    SecondParagraph: (
      <>
        The First.
      </>
    ),
  },
  {
    title: 'Гарантированный результат',
    Svg: require('@site/static/img/swor.svg').default,
    description: (
      <>
      Ваш урон - за 5 секунд.

      </>
    ),
    SecondParagraph: (
      <>
        The Second.
      </>
    ),
  },
  {
    title: 'Классные советы',
    Svg: require('@site/static/img/miko.svg').default,
    description: (
      <>
        Показывает слабые места персонажей.
      </>
    ),
    SecondParagraph: (
      <>
        The Third.
      </>
    ),
  },
];

function Feature({Svg, title, description, SecondParagraph}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {/* <p>{SecondParagraph}</p> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}