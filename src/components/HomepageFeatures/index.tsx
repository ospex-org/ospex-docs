import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'No Vig',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        Pay only blockchain fees to speculate;
        these fees tend to be around 0.01-0.02 USDC per transaction.
      </>
    ),
  },
  {
    title: 'No Signup',
    Svg: require('@site/static/img/undraw_no_data.svg').default,
    description: (
      <>
        No need to create an account or provide personal information; only a
        wallet is required.
      </>
    ),
  },
  {
    title: 'No Speculation Limit*',
    Svg: require('@site/static/img/undraw_online_payments.svg').default,
    description: (
      <>
        Speculate with no need to be concerned about being banned, limited, 
        or having your account closed.<br /><br />
        *10 USDC limit in place until contracts are audited.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
