import css from './Features.module.css';
import svg from '../../assets/sprite.svg';

const Features = ({ ...detail }) => {
  const isCast = /[A-Z]/.test(detail[0]);

  return (
    <div className={css.features}>
      <svg className={css.icon} width='20' height='20'>
        <use xlinkHref={`${svg}#icon-${detail[0]}`} />
      </svg>
      {detail[1] !== 0 ? (
        <>
          <span>{detail[1]}</span>
          {isCast && detail[0].length !== 2 ? (
            <span>
              {detail[0]
                .split(/(?=[A-Z])/)
                .join(' ')
                .toLowerCase()}
            </span>
          ) : (
            <span>{detail[0]}</span>
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Features;
