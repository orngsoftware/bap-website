import styles from './AbstractFigure.module.css';

/**
 * AbstractFace
 * A 320x320 abstract 2D portrait: a single large blue-teal face built
 * purely from organic shadow and highlight blobs (forehead light, a
 * cheek/jaw shadow, a soft nose ridge, a faint mouth crease). No eyes,
 * no hair — the sense of a face comes entirely from value and shape.
 * Same confetti/halo/spiral decorative language as AbstractFigure.
 *
 * No client-side state is used, so this can render as a Server Component.
 */

const PATHS = {
  face:
    'M 84.75,0.00 C 84.00,18.97 78.04,39.01 69.92,55.15 C 61.80,71.28 49.66,89.05 36.02,96.81 C 22.39,104.58 3.11,105.09 -11.92,101.74 C -26.94,98.38 -42.24,88.62 -54.13,76.67 C -66.02,64.71 -77.40,48.15 -83.27,30.01 C -89.15,11.86 -93.25,-13.03 -89.38,-32.21 C -85.51,-51.38 -72.78,-71.94 -60.05,-85.05 C -47.32,-98.16 -28.85,-109.31 -12.99,-110.87 C 2.88,-112.43 20.57,-103.11 35.13,-94.42 C 49.70,-85.72 66.14,-74.43 74.41,-58.69 C 82.68,-42.95 85.50,-18.97 84.75,0.00 Z',
  jawShadow:
    'M 52.41,0.00 C 53.95,13.00 49.56,33.09 40.83,43.97 C 32.09,54.85 12.47,66.51 0.00,65.28 C -12.47,64.06 -24.49,47.48 -33.98,36.60 C -43.48,25.72 -56.07,13.18 -56.98,0.00 C -57.90,-13.18 -48.97,-32.63 -39.47,-42.51 C -29.98,-52.38 -11.85,-60.66 -0.00,-59.25 C 11.85,-57.84 22.87,-43.92 31.61,-34.04 C 40.34,-24.17 50.87,-13.00 52.41,0.00 Z',
  foreheadHighlight:
    'M 51.48,0.00 C 53.17,9.10 45.28,24.36 36.70,31.69 C 28.12,39.02 10.44,45.51 0.00,43.96 C -10.44,42.42 -18.33,29.72 -25.93,22.39 C -33.53,15.07 -44.91,8.07 -45.62,0.00 C -46.33,-8.07 -37.77,-19.64 -30.16,-26.05 C -22.56,-32.46 -9.45,-38.98 -0.00,-38.46 C 9.45,-37.93 17.93,-29.31 26.51,-22.90 C 35.09,-16.49 49.78,-9.10 51.48,0.00 Z',
  noseHighlight:
    'M 7.68,0.00 C 7.65,9.40 6.56,21.35 4.96,27.64 C 3.36,33.93 0.31,39.30 -1.94,37.74 C -4.19,36.19 -7.67,27.18 -8.56,18.31 C -9.44,9.44 -8.36,-6.68 -7.23,-15.47 C -6.10,-24.27 -3.83,-32.25 -1.77,-34.46 C 0.30,-36.68 3.58,-34.50 5.16,-28.76 C 6.74,-23.01 7.72,-9.40 7.68,0.00 Z',
  noseShadow:
    'M 7.35,0.00 C 7.30,8.92 5.76,19.93 4.25,25.90 C 2.75,31.87 -0.09,38.07 -1.68,35.82 C -3.28,33.58 -4.48,21.05 -5.32,12.45 C -6.17,3.84 -7.40,-8.45 -6.76,-15.80 C -6.12,-23.15 -3.37,-29.69 -1.49,-31.66 C 0.39,-33.62 3.06,-32.89 4.53,-27.62 C 6.01,-22.34 7.40,-8.92 7.35,0.00 Z',
  mouthShadow:
    'M 19.99,0.00 C 20.18,1.74 17.66,4.50 13.65,5.45 C 9.64,6.39 1.29,6.12 -4.08,5.68 C -9.44,5.25 -16.48,4.21 -18.54,2.84 C -20.60,1.47 -18.86,-1.13 -16.43,-2.52 C -14.00,-3.91 -8.76,-5.08 -3.94,-5.49 C 0.89,-5.90 8.54,-5.91 12.53,-5.00 C 16.52,-4.08 19.81,-1.74 19.99,0.00 Z',
  aura:
    'M 89.03,0.00 C 89.98,17.16 87.77,39.64 77.67,53.46 C 67.57,67.28 46.40,77.21 28.44,82.92 C 10.48,88.63 -12.15,92.47 -30.09,87.73 C -48.02,82.99 -70.01,69.12 -79.18,54.50 C -88.34,39.88 -86.98,16.87 -85.09,0.00 C -83.21,-16.87 -76.77,-31.30 -67.88,-46.72 C -58.98,-62.14 -47.66,-86.87 -31.73,-92.53 C -15.81,-98.18 10.38,-87.82 27.66,-80.65 C 44.94,-73.48 61.73,-62.97 71.96,-49.53 C 82.18,-36.09 88.07,-17.16 89.03,0.00 Z',
  pebble1:
    'M 8.99,0.00 C 8.72,2.45 6.27,4.88 3.97,6.12 C 1.67,7.35 -2.84,8.42 -4.81,7.40 C -6.78,6.38 -7.90,2.37 -7.84,0.00 C -7.78,-2.37 -6.67,-5.41 -4.44,-6.84 C -2.21,-8.26 3.32,-9.70 5.56,-8.56 C 7.80,-7.42 9.25,-2.45 8.99,0.00 Z',
  pebble2:
    'M 6.33,0.00 C 6.40,1.69 5.21,4.63 3.64,5.40 C 2.07,6.16 -1.14,5.49 -3.09,4.59 C -5.04,3.69 -8.02,1.62 -8.08,0.00 C -8.14,-1.62 -5.32,-4.32 -3.44,-5.11 C -1.56,-5.90 1.58,-5.61 3.21,-4.76 C 4.84,-3.91 6.26,-1.69 6.33,0.00 Z',
  spiral:
    'M 1.50,0.00 L 1.63,0.44 L 1.63,0.94 L 1.47,1.47 L 1.13,1.96 L 0.64,2.37 L 0.00,2.65 L -0.74,2.74 L -1.52,2.63 L -2.28,2.28 L -2.96,1.71 L -3.49,0.93 L -3.80,0.00 L -3.86,-1.03 L -3.62,-2.09 L -3.09,-3.09 L -2.28,-3.95 L -1.23,-4.60 L -0.00,-4.95 L 1.33,-4.97 L 2.67,-4.62 L 3.91,-3.91 L 4.95,-2.86 L 5.71,-1.53 L 6.10,-0.00 L 6.08,1.63 L 5.61,3.24 L 4.72,4.72 L 3.43,5.95 L 1.83,6.82 L 0.00,7.25 L -1.93,7.19 L -3.82,6.61 L -5.53,5.53 L -6.94,4.01 L -7.93,2.12 L -8.40,0.00 L -8.30,-2.22 L -7.61,-4.39 L -6.35,-6.35 L -4.58,-7.94 L -2.42,-9.04 L -0.00,-9.55 L 2.52,-9.41 L 4.97,-8.60 L 7.16,-7.16 L 8.93,-5.16 L 10.15,-2.72 L 10.70,-0.00 L 10.52,2.82 L 9.60,5.54 L 7.97,7.97 L 5.73,9.93 L 3.02,11.26 L 0.00,11.85 L -3.12,11.63 L -6.12,10.59 L -8.79,8.79 L -10.93,6.31 L -12.37,3.32 L -13.00,0.00',
  scallop:
    'M 0.00,0.00 Q 20.00,7.00 40.00,0.00 Q 60.00,7.00 80.00,0.00 Q 100.00,7.00 120.00,0.00 Q 140.00,7.00 160.00,0.00 Q 180.00,7.00 200.00,0.00 Q 220.00,7.00 240.00,0.00 Q 260.00,7.00 280.00,0.00 Q 300.00,7.00 320.00,0.00',
  spark:
    'M 0,-10 C 1,-3 3,-1 10,0 C 3,1 1,3 0,10 C -1,3 -3,1 -10,0 C -3,-1 -1,-3 0,-10 Z',
};

const HALO_COLORS = [
  styles.haloCoral,
  styles.haloMustard,
  styles.haloInk,
  styles.haloTeal,
  styles.haloCoral,
  styles.haloMustard,
  styles.haloInk,
  styles.haloTeal,
];

const FACE_CENTER = { x: 160, y: 165 };
const HALO_RADIUS = 122;

export default function AbstractFace() {
  return (
    <div className={styles.canvas}>
      <svg
        className={styles.svg}
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract illustration of a large blue face formed from shadows, with no eyes or hair"
      >
        {/* soft glow behind the face */}
        <g transform={`translate(${FACE_CENTER.x},${FACE_CENTER.y}) scale(1.04,1.18)`}>
          <path className={styles.aura} d={PATHS.aura} />
        </g>

        {/* scalloped ground line */}
        <path
          className={styles.scallop}
          d={PATHS.scallop}
          transform="translate(0,304)"
        />

        {/* gentle floating group: the face itself */}
        <g className={styles.faceGroup}>
          {/* base face shape */}
          <g transform={`translate(${FACE_CENTER.x},${FACE_CENTER.y})`}>
            <path className={styles.face} d={PATHS.face} />
          </g>

          {/* forehead / temple highlight */}
          <g transform="translate(136,126) scale(0.62)">
            <path className={styles.foreheadHighlight} d={PATHS.foreheadHighlight} />
          </g>

          {/* soft nose ridge: a sliver of shadow beside a sliver of light */}
          <g transform="translate(167,180)">
            <path className={styles.noseShadow} d={PATHS.noseShadow} />
          </g>
          <g transform="translate(151,174)">
            <path className={styles.noseHighlight} d={PATHS.noseHighlight} />
          </g>

          {/* faint mouth crease */}
          <g transform="translate(160,234)">
            <path className={styles.mouthShadow} d={PATHS.mouthShadow} />
          </g>

          {/* halo of small dots orbiting the face */}
          <g
            transform={`translate(${FACE_CENTER.x},${FACE_CENTER.y})`}
            className={styles.halo}
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (Math.PI / 4) * i;
              const x = Math.cos(angle) * HALO_RADIUS;
              const y = Math.sin(angle) * HALO_RADIUS;
              return (
                <circle
                  key={i}
                  className={`${styles.haloDot} ${HALO_COLORS[i]}`}
                  cx={x}
                  cy={y}
                  r={i % 2 === 0 ? 5 : 4}
                />
              );
            })}
          </g>
        </g>

        {/* scattered confetti: sparkles, spiral, pebbles */}
        <g transform="translate(46,54) scale(1.3)">
          <path className={`${styles.star} ${styles.star1}`} d={PATHS.spark} />
        </g>
        <g transform="translate(268,50) scale(1)">
          <path className={`${styles.star} ${styles.star2}`} d={PATHS.spark} />
        </g>
        <g transform="translate(38,236) scale(0.8)">
          <path className={`${styles.star} ${styles.star3}`} d={PATHS.spark} />
        </g>

        <g transform="translate(280,216) scale(1.5)">
          <path className={styles.spiral} d={PATHS.spiral} />
        </g>

        <g transform="translate(86,278) scale(1.1)">
          <path className={styles.pebble1} d={PATHS.pebble1} />
        </g>
        <g transform="translate(238,284) scale(0.9)">
          <path className={styles.pebble2} d={PATHS.pebble2} />
        </g>
      </svg>
    </div>
  );
}