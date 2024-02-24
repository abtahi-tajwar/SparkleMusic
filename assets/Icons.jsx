import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Circle } from "react-native-svg";
export const MusicIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M20.89 5.179v11.3c0 1.98-1.61 3.59-3.59 3.59a3.6 3.6 0 0 1-3.59-3.59c0-1.97 1.62-3.58 3.59-3.58.84 0 1.59.29 2.2.77v-5.95l-9.21 2.62v8.07a3.6 3.6 0 0 1-3.59 3.59c-1.98 0-3.59-1.61-3.59-3.59 0-1.97 1.61-3.58 3.59-3.58.83 0 1.58.29 2.19.76v-8.84c0-1.47.89-2.61 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33.71.53 1.06 1.43 1.06 2.67z"
    />
  </Svg>
);
export const DownloadIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M18.033 19.536v1.5H6.015v-1.5h12.018Zm-6.009-1.5-6.009-6h3.037l-.019-9h5.991l.018 9h2.991l-6.009 6Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const AlbumIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M3.2 4H2v16h1.2V4ZM22 4h-1.2v16H22V4ZM24 5.6h-1.2v12.8H24V5.6ZM1.2 5.6H0v12.8h1.2V5.6ZM4 2.4v19.2h16V2.4H4Zm14 17.2H6V4.4h12v15.2Z"
    />
  </Svg>
);
export const MainLogoWithText = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={130}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill={props?.fill ?? "#C4302B"}
      d="M5.88 19.432c-1.008 0-1.896-.176-2.664-.528-.768-.352-1.36-.84-1.776-1.464-.416-.64-.624-1.376-.624-2.208 0-.704.144-1.344.432-1.92a3.703 3.703 0 0 1 1.2-1.368 3 3 0 0 1 1.68-.504c.56 0 1.032.144 1.416.432.384.272.624.656.72 1.152-.832 0-1.496.224-1.992.672-.496.432-.744 1.024-.744 1.776 0 .688.208 1.24.624 1.656.416.416.968.624 1.656.624.848 0 1.544-.28 2.088-.84.56-.576.84-1.296.84-2.16 0-.752-.208-1.464-.624-2.136-.416-.672-1.04-1.488-1.872-2.448-.864-.992-1.52-1.84-1.968-2.544a4.488 4.488 0 0 1-.648-2.352c0-.832.232-1.576.696-2.232.464-.672 1.104-1.2 1.92-1.584C7.056 1.072 7.976.88 9 .88c1.296 0 2.328.304 3.096.912.784.608 1.176 1.424 1.176 2.448 0 .672-.168 1.216-.504 1.632a1.615 1.615 0 0 1-1.32.624c-.608 0-1.096-.248-1.464-.744.304-.224.544-.52.72-.888.176-.368.264-.752.264-1.152 0-.512-.152-.92-.456-1.224-.304-.304-.72-.456-1.248-.456-.64 0-1.168.232-1.584.696-.4.448-.6 1.024-.6 1.728 0 .64.184 1.24.552 1.8C8 6.8 8.576 7.504 9.36 8.368c.64.688 1.152 1.28 1.536 1.776.4.496.736 1.072 1.008 1.728.288.64.432 1.336.432 2.088a4.78 4.78 0 0 1-.864 2.784c-.56.832-1.336 1.488-2.328 1.968-.976.48-2.064.72-3.264.72Zm9.631-13.32h3.457l-.384 1.8c.8-.688 1.736-1.032 2.808-1.032.896 0 1.608.296 2.136.888.527.592.792 1.56.792 2.904a14.01 14.01 0 0 1-.553 3.84c-.367 1.28-.991 2.376-1.872 3.288-.88.896-2.04 1.344-3.48 1.344-1.023 0-1.703-.288-2.04-.864l-1.248 5.856-3.623.864 4.008-18.888Zm2.16 10.944c.768 0 1.4-.36 1.896-1.08.512-.72.88-1.576 1.105-2.568.24-1.008.36-1.944.36-2.808 0-1.328-.4-1.992-1.2-1.992-.288 0-.585.104-.889.312a2.912 2.912 0 0 0-.768.864l-1.416 6.72c.128.368.433.552.913.552Zm10.123 2.088c-.912 0-1.672-.312-2.28-.936-.608-.624-.912-1.6-.912-2.928 0-1.184.232-2.424.696-3.72.48-1.312 1.184-2.416 2.112-3.312.944-.912 2.064-1.368 3.36-1.368.656 0 1.144.112 1.464.336.32.224.48.52.48.888v.168L32.978 7h3.456l-1.728 8.16a2.97 2.97 0 0 0-.096.768c0 .688.328 1.032.984 1.032.448 0 .832-.208 1.152-.624.336-.416.6-.96.792-1.632h1.008c-.592 1.728-1.328 2.904-2.208 3.528-.864.608-1.736.912-2.616.912-.672 0-1.216-.184-1.632-.552-.4-.384-.64-.936-.72-1.656a6.8 6.8 0 0 1-1.56 1.608c-.56.4-1.232.6-2.016.6Zm1.56-2.328c.4 0 .792-.184 1.176-.552.4-.384.672-.904.816-1.56l1.152-5.424c0-.208-.08-.408-.24-.6-.16-.208-.408-.312-.744-.312-.64 0-1.216.376-1.728 1.128-.512.736-.912 1.632-1.2 2.688-.288 1.04-.432 1.96-.432 2.76 0 .8.112 1.312.336 1.536.24.224.528.336.864.336ZM39.18 7h3.456l-.312 1.488c.544-.48 1.032-.848 1.464-1.104A2.855 2.855 0 0 1 45.227 7c.512 0 .912.176 1.2.528.304.352.456.776.456 1.272 0 .464-.152.872-.456 1.224-.304.352-.728.528-1.272.528-.352 0-.592-.08-.72-.24-.112-.176-.2-.424-.264-.744a2.203 2.203 0 0 0-.144-.456c-.048-.096-.136-.144-.264-.144-.336 0-.624.072-.864.216-.224.128-.52.36-.888.696L40.09 19h-3.456l2.544-12Zm16.415 12.144c-.992 0-1.744-.232-2.256-.696-.512-.48-.768-1.16-.768-2.04 0-.384.048-.8.144-1.248l.192-.936c.064-.272.096-.568.096-.888 0-.768-.288-1.152-.864-1.152a1.83 1.83 0 0 0-.816.216 5.964 5.964 0 0 0-.96.672L49.114 19h-3.456l3.48-16.32 3.552-.48-1.8 8.448L55.522 7h2.376l-4.8 3.336a3.07 3.07 0 0 1 .792-.096c.864 0 1.52.264 1.968.792.448.528.672 1.2.672 2.016 0 .336-.032.64-.096.912l-.264 1.2a2.91 2.91 0 0 0-.12.768c0 .592.312.888.936.888.48 0 .864-.168 1.152-.504.288-.352.576-.888.864-1.608h1.008c-.992 2.96-2.464 4.44-4.416 4.44Zm5.774 0c-.768 0-1.392-.24-1.872-.72-.464-.48-.696-1.2-.696-2.16 0-.4.064-.92.192-1.56L61.56 2.68l3.552-.48-2.76 12.96a2.97 2.97 0 0 0-.096.768c0 .32.072.552.216.696.16.128.416.192.768.192.464 0 .896-.192 1.296-.576.4-.4.688-.912.864-1.536h1.008c-.592 1.728-1.352 2.904-2.28 3.528-.928.608-1.848.912-2.76.912Zm7.407 0c-1.168 0-2.08-.304-2.736-.912-.656-.624-.984-1.592-.984-2.904 0-1.104.216-2.32.648-3.648a8.372 8.372 0 0 1 2.112-3.432c.976-.976 2.216-1.464 3.72-1.464 1.76 0 2.64.768 2.64 2.304a4.3 4.3 0 0 1-.768 2.472 5.771 5.771 0 0 1-2.04 1.824 6.696 6.696 0 0 1-2.712.768 9.636 9.636 0 0 0-.048.72c0 1.328.496 1.992 1.488 1.992.448 0 .928-.12 1.44-.36.512-.24.976-.544 1.392-.912-.432 2.368-1.816 3.552-4.152 3.552ZM68.823 13c.608-.016 1.176-.216 1.704-.6a4.227 4.227 0 0 0 1.296-1.464c.336-.608.504-1.24.504-1.896 0-.656-.2-.984-.6-.984-.56 0-1.12.512-1.68 1.536-.544 1.008-.952 2.144-1.224 3.408Z"
    />
    <Path
      fill="#fff"
      d="M81.884 2.512c-1.216.4-2.16 1.064-2.832 1.992-.656.912-.984 2.048-.984 3.408 0 .608.056 1.024.168 1.248.112.224.168.36.168.408-1.712 0-2.568-.728-2.568-2.184 0-.992.376-1.984 1.128-2.976.768-1.008 1.744-1.824 2.928-2.448 1.2-.64 2.392-.96 3.576-.96.592 0 1.2.112 1.824.336l-.552 12.648 5.28-12.648h3.456L90.956 19H87.5l1.536-10.776L84.524 19h-3.288l.48-10.824L77.708 19h-1.92l6.096-16.488Zm13.562 16.632c-.768 0-1.392-.24-1.872-.72-.464-.48-.696-1.2-.696-2.16 0-.4.064-.92.192-1.56L94.702 7h3.456l-1.728 8.16c-.048.24-.072.464-.072.672 0 .656.24.984.72.984.448 0 .832-.184 1.152-.552.32-.384.576-.904.768-1.56L100.63 7h3.456l-1.728 8.16a2.97 2.97 0 0 0-.096.768c0 .32.072.552.216.696.16.128.416.192.768.192.448 0 .832-.192 1.152-.576.336-.384.6-.896.792-1.536h1.008c-.592 1.728-1.328 2.904-2.208 3.528-.864.608-1.736.912-2.616.912-.688 0-1.24-.192-1.656-.576-.4-.384-.64-.952-.72-1.704-.544.88-1.12 1.48-1.728 1.8-.592.32-1.2.48-1.824.48Zm12.478 0c-.768 0-1.417-.144-1.945-.432-.528-.304-.92-.688-1.176-1.152a3.124 3.124 0 0 1-.384-1.488c0-.528.128-.984.384-1.368.24-.4.537-.688.889-.864a31.17 31.17 0 0 0 1.632-3.384 49.873 49.873 0 0 0 1.32-3.72l3.552-.48c.08 2.048.216 4.264.408 6.648.08.96.12 1.656.12 2.088 0 .368-.032.672-.096.912.752-.432 1.328-.832 1.728-1.2h1.008a14.028 14.028 0 0 1-3.672 3 4.229 4.229 0 0 1-1.728 1.104 6.413 6.413 0 0 1-2.04.336Zm-.768-1.896c.592 0 1.088-.176 1.488-.528.4-.352.6-.92.6-1.704 0-.48-.048-1.152-.144-2.016-.16-1.824-.264-3.048-.312-3.672-.384 1.264-1.032 2.776-1.944 4.536.368.192.552.472.552.84 0 .304-.104.576-.312.816a.91.91 0 0 1-.744.36c-.336 0-.552-.104-.648-.312 0 .576.112 1 .336 1.272.24.272.616.408 1.128.408ZM118.36 5.704a1.83 1.83 0 0 1-1.344-.552 1.83 1.83 0 0 1-.552-1.344c0-.528.184-.976.552-1.344a1.791 1.791 0 0 1 1.344-.576c.528 0 .976.192 1.344.576.384.368.576.816.576 1.344 0 .528-.192.976-.576 1.344a1.83 1.83 0 0 1-1.344.552Zm-1.632 13.44c-.768 0-1.392-.24-1.872-.72-.464-.48-.696-1.2-.696-2.16 0-.4.064-.92.192-1.56L115.984 7h3.456l-1.728 8.16a2.97 2.97 0 0 0-.096.768c0 .32.072.552.216.696.16.128.416.192.768.192.464 0 .896-.192 1.296-.576.4-.4.688-.912.864-1.536h1.008c-.592 1.728-1.352 2.904-2.28 3.528-.928.608-1.848.912-2.76.912Zm7.262 0c-1.168 0-2.08-.304-2.736-.912-.656-.624-.984-1.592-.984-2.904 0-1.104.216-2.32.648-3.648a8.724 8.724 0 0 1 2.112-3.432c.976-.976 2.208-1.464 3.696-1.464.976 0 1.664.208 2.064.624.4.416.6.952.6 1.608 0 .576-.128 1.008-.384 1.296-.24.288-.536.432-.888.432a1.37 1.37 0 0 1-.84-.288c.192-.512.288-.984.288-1.416 0-.656-.216-.984-.648-.984-.48 0-.96.4-1.44 1.2-.48.784-.88 1.728-1.2 2.832-.304 1.088-.456 2.032-.456 2.832 0 1.328.48 1.992 1.44 1.992.432 0 .912-.128 1.44-.384a7.206 7.206 0 0 0 1.44-.936c-.432 2.368-1.816 3.552-4.152 3.552Z"
    />
  </Svg>
);
export const ProfileIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.605 11.182a.838.838 0 0 0-.21 0 2.86 2.86 0 0 1-2.765-2.86 2.866 2.866 0 0 1 2.87-2.87 2.866 2.866 0 0 1 .105 5.731ZM16.398 16.958A8.693 8.693 0 0 1 10.5 19.25a8.693 8.693 0 0 1-5.897-2.292c.087-.823.612-1.628 1.548-2.258 2.398-1.592 6.318-1.592 8.698 0 .936.63 1.461 1.435 1.549 2.258Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.25a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Z"
    />
  </Svg>
);
export const SettingsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.05}
      d="M10.188 14.125a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm-7.437 2.517-.875.507a1.75 1.75 0 0 0-.642 2.39l1.303 2.256a1.752 1.752 0 0 0 2.392.642l.884-.51a.88.88 0 0 1 .882.01.868.868 0 0 1 .433.749V18.5a1.75 1.75 0 0 0 1.75 1.75h2.625a1.75 1.75 0 0 0 1.75-1.75v-1.066a.884.884 0 0 1 1.313-.758l.883.51a1.75 1.75 0 0 0 2.39-.64l1.302-2.256a1.749 1.749 0 0 0-.641-2.391l-.875-.507a.881.881 0 0 1-.438-.778.875.875 0 0 1 .438-.756l.875-.507a1.75 1.75 0 0 0 .641-2.39l-1.304-2.256a1.751 1.751 0 0 0-2.39-.643l-.884.51a.882.882 0 0 1-1.312-.758V2.75A1.75 1.75 0 0 0 11.5 1H8.876a1.75 1.75 0 0 0-1.75 1.75v1.132a.747.747 0 0 1-.375.648l-.135.078a.756.756 0 0 1-.747 0l-.94-.545a1.75 1.75 0 0 0-2.391.64L1.236 6.961a1.75 1.75 0 0 0 .64 2.39l.875.506a.885.885 0 0 1 .437.78.87.87 0 0 1-.437.755Zm.875-3.05-.875-.507L4.054 5.58l.94.542a2.503 2.503 0 0 0 2.494 0l.135-.077a2.505 2.505 0 0 0 1.253-2.163V2.75H11.5v1.064a2.632 2.632 0 0 0 3.937 2.275l.881-.51 1.307 2.256-.875.506a2.646 2.646 0 0 0 0 4.567l.875.507-1.302 2.255-.886-.509a2.633 2.633 0 0 0-3.937 2.275V18.5H8.876v-1.064a2.63 2.63 0 0 0-3.938-2.275l-.881.51-1.306-2.256.875-.507a2.646 2.646 0 0 0 0-4.567Z"
    />
  </Svg>
);
export const OptionsIconHorizontal = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={3}
    fill="none"
    {...props}
  >
    <Circle cx={1.5} cy={1.5} r={1.5} fill="#D9D9D9" />
    <Circle cx={7.5} cy={1.5} r={1.5} fill="#D9D9D9" />
    <Circle cx={13.5} cy={1.5} r={1.5} fill="#D9D9D9" />
  </Svg>
);

export const MediaGoPreviousIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill={props?.fill ?? "#fff"}
      fillRule="evenodd"
      d="m9.956 6.45 6.919 3.995a.917.917 0 0 0 1.375-.794V1.335A.917.917 0 0 0 16.875.54L9.956 4.535v-3.2A.917.917 0 0 0 8.581.54L1.38 4.699a.917.917 0 0 0 0 1.588l7.202 4.158a.917.917 0 0 0 1.375-.794v-3.2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const MediaGoNextIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={color ?? "#fff"}
      fillRule="evenodd"
      d="M12.048 13.583 4.5 17.94a1 1 0 0 1-1.5-.866V8.002a1 1 0 0 1 1.5-.867l7.548 4.358V8.001a1 1 0 0 1 1.5-.866l7.857 4.537a1 1 0 0 1 0 1.732l-7.857 4.536a1 1 0 0 1-1.5-.866v-3.491Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const MediaPauseIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path fill={color} d="M6 4h3v14H6V4Zm7 14V4h3v14h-3Z" />
  </Svg>
);

export const MediaPlayIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke={color ?? "white"}
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 8.7v5.365c0 1.778 2 2.902 3.629 2.038l2.529-1.341M1 5.62V3.335C1 1.557 3 .433 4.629 1.297L14.744 6.66a2.282 2.282 0 0 1 0 4.078L9.686 13.42"
    />
  </Svg>
);

export const MediaReplayIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={color ?? "white"}
      d="M7.5 18.123a7.51 7.51 0 0 1-7.5-7.5.776.776 0 1 1 1.552 0A5.948 5.948 0 1 0 7.5 4.675H4.914a.776.776 0 0 1 0-1.552H7.5a7.5 7.5 0 0 1 0 15Z"
    />
    <Path
      fill={color ?? "white"}
      d="M7.5 7.778a.764.764 0 0 1-.548-.228L3.848 4.447a.776.776 0 0 1 0-1.097L6.952.247a.776.776 0 1 1 1.096 1.096L5.493 3.9l2.555 2.555A.776.776 0 0 1 7.5 7.778Z"
    />
  </Svg>
);

export const MediaPlayIconLarge = ({ color, ...props }) => (
  <Svg
    width={63}
    height={63}
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M31.5 5.25C16.9969 5.25 5.25 16.9969 5.25 31.5C5.25 46.0031 16.9969 57.75 31.5 57.75C46.0031 57.75 57.75 46.0031 57.75 31.5C57.75 16.9969 46.0031 5.25 31.5 5.25ZM26.25 43.3125V19.6875L42 31.5L26.25 43.3125Z"
      fill="#F8F8F8"
    />
  </Svg>
);

export const MediaGoPreviousIconLarge = ({ color, ...props }) => (
  <Svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.8969 29.429L42.25 38.8704C43.6945 39.7044 45.5 38.662 45.5 36.9941V17.3366C45.5 15.6687 43.6945 14.6263 42.25 15.4602L25.8969 24.9017V17.3366C25.8969 15.6687 24.0912 14.6263 22.6469 15.4602L5.62294 25.2889C4.17863 26.1229 4.17863 28.2078 5.62294 29.0418L22.6469 38.8704C24.0912 39.7044 25.8969 38.662 25.8969 36.9941V29.429Z"
      fill="white"
    />
  </Svg>
);

export const MediaGoNextIconLarge = ({ color, ...props }) => (
  <Svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.1111 31.6927L10.5 41.8605C8.94444 42.7586 7 41.636 7 39.8398V18.6702C7 16.874 8.94444 15.7514 10.5 16.6495L28.1111 26.8172V18.6702C28.1111 16.874 30.0557 15.7514 31.6111 16.6495L49.9445 27.2342C51.4999 28.1323 51.4999 30.3777 49.9445 31.2758L31.6111 41.8605C30.0557 42.7586 28.1111 41.636 28.1111 39.8398V31.6927Z"
      fill="white"
    />
  </Svg>
);

export const MediaShuffleIcon = ({ color, ...props }) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M32.4926 24.3824C32.5943 24.484 32.6749 24.6046 32.73 24.7374C32.785 24.8702 32.8134 25.0125 32.8134 25.1562C32.8134 25.3 32.785 25.4423 32.73 25.5751C32.6749 25.7079 32.5943 25.8285 32.4926 25.9301L29.2113 29.2113C29.0061 29.4166 28.7277 29.5319 28.4375 29.5319C28.1473 29.5319 27.8689 29.4166 27.6637 29.2113C27.4584 29.0061 27.3431 28.7277 27.3431 28.4375C27.3431 28.1473 27.4584 27.8689 27.6637 27.6637L29.0787 26.25H27.4723C25.9056 26.2487 24.3618 25.8741 22.9688 25.1573C21.5758 24.4404 20.3736 23.402 19.4619 22.1279L13.758 14.1436C13.0489 13.1527 12.1138 12.345 11.0304 11.7875C9.94692 11.23 8.74622 10.9386 7.52773 10.9375H4.375C4.08492 10.9375 3.80672 10.8223 3.6016 10.6171C3.39648 10.412 3.28125 10.1338 3.28125 9.84375C3.28125 9.55367 3.39648 9.27547 3.6016 9.07035C3.80672 8.86523 4.08492 8.75 4.375 8.75H7.52773C9.09438 8.7513 10.6382 9.12589 12.0312 9.84273C13.4242 10.5596 14.6264 11.598 15.5381 12.8721L21.242 20.8564C21.9511 21.8473 22.8862 22.655 23.9696 23.2125C25.0531 23.77 26.2538 24.0614 27.4723 24.0625H29.0787L27.6637 22.6488C27.4584 22.4436 27.3431 22.1652 27.3431 21.875C27.3431 21.5848 27.4584 21.3064 27.6637 21.1012C27.8689 20.8959 28.1473 20.7806 28.4375 20.7806C28.7277 20.7806 29.0061 20.8959 29.2113 21.1012L32.4926 24.3824ZM19.5508 14.6289C19.6677 14.7124 19.7998 14.772 19.9398 14.8044C20.0797 14.8369 20.2247 14.8414 20.3663 14.8178C20.508 14.7942 20.6437 14.7429 20.7655 14.6668C20.8874 14.5908 20.9931 14.4915 21.0766 14.3746L21.2406 14.1463C21.9496 13.1547 22.8847 12.3464 23.9685 11.7884C25.0522 11.2304 26.2533 10.9387 27.4723 10.9375H29.0787L27.6637 12.3512C27.4584 12.5564 27.3431 12.8348 27.3431 13.125C27.3431 13.4152 27.4584 13.6936 27.6637 13.8988C27.8689 14.1041 28.1473 14.2194 28.4375 14.2194C28.7277 14.2194 29.0061 14.1041 29.2113 13.8988L32.4926 10.6176C32.5943 10.516 32.6749 10.3954 32.73 10.2626C32.785 10.1298 32.8134 9.98748 32.8134 9.84375C32.8134 9.70001 32.785 9.55769 32.73 9.42491C32.6749 9.29213 32.5943 9.1715 32.4926 9.06992L29.2113 5.78867C29.0061 5.58344 28.7277 5.46814 28.4375 5.46814C28.1473 5.46814 27.8689 5.58344 27.6637 5.78867C27.4584 5.9939 27.3431 6.27226 27.3431 6.5625C27.3431 6.85274 27.4584 7.13109 27.6637 7.33633L29.0787 8.75H27.4723C25.9056 8.7513 24.3618 9.12589 22.9688 9.84273C21.5758 10.5596 20.3736 11.598 19.4619 12.8721L19.2979 13.1004C19.2139 13.2173 19.1538 13.3496 19.121 13.4897C19.0883 13.6299 19.0835 13.7751 19.107 13.9172C19.1305 14.0592 19.1818 14.1951 19.258 14.3173C19.3341 14.4394 19.4336 14.5453 19.5508 14.6289ZM15.4492 20.3711C15.3323 20.2876 15.2002 20.228 15.0602 20.1955C14.9203 20.1631 14.7753 20.1586 14.6337 20.1822C14.492 20.2058 14.3563 20.2571 14.2345 20.3332C14.1126 20.4092 14.0069 20.5085 13.9234 20.6254L13.7594 20.8537C13.0504 21.8453 12.1153 22.6536 11.0315 23.2116C9.94781 23.7696 8.74669 24.0613 7.52773 24.0625H4.375C4.08492 24.0625 3.80672 24.1777 3.6016 24.3829C3.39648 24.588 3.28125 24.8662 3.28125 25.1562C3.28125 25.4463 3.39648 25.7245 3.6016 25.9296C3.80672 26.1348 4.08492 26.25 4.375 26.25H7.52773C9.09438 26.2487 10.6382 25.8741 12.0312 25.1573C13.4242 24.4404 14.6264 23.402 15.5381 22.1279L15.7021 21.8996C15.7861 21.7827 15.8462 21.6504 15.879 21.5102C15.9117 21.3701 15.9165 21.2248 15.893 21.0828C15.8695 20.9408 15.8182 20.8049 15.742 20.6827C15.6659 20.5606 15.5664 20.4547 15.4492 20.3711Z"
      fill={color ?? "#F8F8F8"}
    />
  </Svg>
);

export const MediaRepeatIcon = ({ color, ...props }) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.28126 17.5C3.28415 14.8902 4.32219 12.388 6.16762 10.5426C8.01305 8.69718 10.5152 7.65914 13.125 7.65625H27.985L26.5699 6.24258C26.3647 6.03734 26.2494 5.75899 26.2494 5.46875C26.2494 5.17851 26.3647 4.90015 26.5699 4.69492C26.7752 4.48969 27.0535 4.37439 27.3438 4.37439C27.634 4.37439 27.9123 4.48969 28.1176 4.69492L31.3988 7.97617C31.5005 8.07775 31.5812 8.19838 31.6362 8.33116C31.6913 8.46394 31.7196 8.60626 31.7196 8.75C31.7196 8.89373 31.6913 9.03606 31.6362 9.16884C31.5812 9.30162 31.5005 9.42225 31.3988 9.52383L28.1176 12.8051C27.9123 13.0103 27.634 13.1256 27.3438 13.1256C27.0535 13.1256 26.7752 13.0103 26.5699 12.8051C26.3647 12.5998 26.2494 12.3215 26.2494 12.0312C26.2494 11.741 26.3647 11.4627 26.5699 11.2574L27.985 9.84375H13.125C11.0951 9.84592 9.14897 10.6533 7.71362 12.0886C6.27826 13.524 5.47093 15.4701 5.46876 17.5C5.46876 17.7901 5.35352 18.0683 5.1484 18.2734C4.94329 18.4785 4.66509 18.5937 4.37501 18.5937C4.08493 18.5937 3.80673 18.4785 3.60161 18.2734C3.39649 18.0683 3.28126 17.7901 3.28126 17.5ZM30.625 16.4062C30.3349 16.4062 30.0567 16.5215 29.8516 16.7266C29.6465 16.9317 29.5313 17.2099 29.5313 17.5C29.5291 19.5299 28.7217 21.476 27.2864 22.9114C25.851 24.3467 23.9049 25.1541 21.875 25.1562H7.01504L8.43008 23.7426C8.5317 23.641 8.61231 23.5203 8.66731 23.3875C8.72231 23.2548 8.75061 23.1125 8.75061 22.9687C8.75061 22.825 8.72231 22.6827 8.66731 22.55C8.61231 22.4172 8.5317 22.2965 8.43008 22.1949C8.32846 22.0933 8.20782 22.0127 8.07505 21.9577C7.94228 21.9027 7.79997 21.8744 7.65626 21.8744C7.51254 21.8744 7.37024 21.9027 7.23746 21.9577C7.10469 22.0127 6.98405 22.0933 6.88243 22.1949L3.60118 25.4762C3.49948 25.5777 3.41881 25.6984 3.36377 25.8312C3.30873 25.9639 3.2804 26.1063 3.2804 26.25C3.2804 26.3937 3.30873 26.5361 3.36377 26.6688C3.41881 26.8016 3.49948 26.9222 3.60118 27.0238L6.88243 30.3051C6.98405 30.4067 7.10469 30.4873 7.23746 30.5423C7.37024 30.5973 7.51254 30.6256 7.65626 30.6256C7.79997 30.6256 7.94228 30.5973 8.07505 30.5423C8.20782 30.4873 8.32846 30.4067 8.43008 30.3051C8.5317 30.2035 8.61231 30.0828 8.66731 29.95C8.72231 29.8173 8.75061 29.675 8.75061 29.5312C8.75061 29.3875 8.72231 29.2452 8.66731 29.1125C8.61231 28.9797 8.5317 28.859 8.43008 28.7574L7.01504 27.3437H21.875C24.4848 27.3409 26.987 26.3028 28.8324 24.4574C30.6778 22.6119 31.7159 20.1098 31.7188 17.5C31.7188 17.2099 31.6035 16.9317 31.3984 16.7266C31.1933 16.5215 30.9151 16.4062 30.625 16.4062Z"
      fill="#F8F8F8"
    />
  </Svg>
);

export const MediaPauseIconLarge = ({ color, ...props }) => (
  <Svg
    width={63}
    height={63}
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M36.75 49.875V13.125H47.25V49.875H36.75ZM15.75 49.875V13.125H26.25V49.875H15.75Z"
      fill="#C4302B"
    />
  </Svg>
);

export const MediaReplayIconLarge = ({ color, ...props }) => (
  <Svg
    width={35}
    height={43}
    viewBox="0 0 35 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5 42.2865C12.8607 42.2802 8.41318 40.4344 5.13269 37.1538C1.85218 33.8732 0.00639655 29.4258 0 24.7865C0 24.3064 0.190737 23.8458 0.530237 23.5064C0.869737 23.1668 1.33022 22.9761 1.81034 22.9761C2.29047 22.9761 2.75095 23.1668 3.09045 23.5064C3.42995 23.8458 3.62069 24.3064 3.62069 24.7865C3.62069 27.5314 4.43469 30.2148 5.95978 32.4973C7.48486 34.7798 9.65249 36.5588 12.1886 37.6093C14.7246 38.6597 17.5154 38.9347 20.2078 38.3991C22.9001 37.8637 25.3731 36.5416 27.3142 34.6007C29.2552 32.6595 30.5772 30.1866 31.1126 27.4943C31.6482 24.8019 31.3733 22.0111 30.3228 19.4752C29.2723 16.939 27.4933 14.7713 25.2109 13.2462C22.9284 11.7212 20.245 10.9072 17.5 10.9072H11.4655C10.9854 10.9072 10.5249 10.7164 10.1854 10.3769C9.84591 10.0374 9.65517 9.57694 9.65517 9.09681C9.65517 8.61669 9.84591 8.15621 10.1854 7.81671C10.5249 7.47721 10.9854 7.28647 11.4655 7.28647H17.5C22.1412 7.28647 26.5925 9.13022 29.8743 12.4121C33.1563 15.694 35 20.1452 35 24.7865C35 29.4277 33.1563 33.879 29.8743 37.1608C26.5925 40.4428 22.1412 42.2865 17.5 42.2865Z"
      fill="#C4302B"
    />
    <Path
      d="M17.4999 18.1485C17.2622 18.1497 17.0263 18.1034 16.8067 18.0121C16.587 17.9209 16.3877 17.7867 16.2206 17.6175L8.97924 10.3762C8.64022 10.0368 8.4498 9.57662 8.4498 9.09688C8.4498 8.61714 8.64022 8.15702 8.97924 7.81757L16.2206 0.576189C16.3864 0.398317 16.5863 0.255662 16.8084 0.156721C17.0304 0.0577793 17.2701 0.0045792 17.5132 0.000282648C17.7563 -0.0040139 17.9977 0.0407133 18.2231 0.131762C18.4485 0.22281 18.6532 0.35832 18.8251 0.530231C18.9972 0.702141 19.1326 0.906927 19.2236 1.13233C19.3146 1.35775 19.3595 1.5992 19.3552 1.84227C19.3508 2.08537 19.2977 2.32508 19.1988 2.54715C19.0998 2.76922 18.9571 2.96908 18.7792 3.13481L12.8172 9.09688L18.7792 15.0589C19.1181 15.3984 19.3086 15.8585 19.3086 16.3382C19.3086 16.818 19.1181 17.2781 18.7792 17.6175C18.6122 17.7867 18.4128 17.9209 18.1932 18.0121C17.9735 18.1034 17.7377 18.1497 17.4999 18.1485Z"
      fill="#C4302B"
    />
  </Svg>
);

export const PreviewIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill={color ?? "#fff"}
      d="M6 0c3.75 0 6 4.125 6 4.125S9.75 8.25 6 8.25 0 4.125 0 4.125 2.25 0 6 0Zm0 .75C3.36.75 1.498 3.188.881 4.125 1.498 5.061 3.36 7.5 6 7.5c2.64 0 4.502-2.438 5.119-3.375C10.502 3.189 8.64.75 6 .75Zm0 .75a2.625 2.625 0 1 1 0 5.25A2.625 2.625 0 0 1 6 1.5Zm0 .75a1.877 1.877 0 0 0-1.875 1.875C4.125 5.159 4.965 6 6 6a1.877 1.877 0 0 0 1.875-1.875c0-1.034-.84-1.875-1.875-1.875Z"
    />
  </Svg>
)

export const DownloadIcon2 = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke={ color ?? "#fff" }
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 1.5V8m0 0 2-2.188M6 8 4 5.812M7.5 10.5h-3c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56m9 0c0 1.414 0 2.121-.44 2.56-.15.15-.33.25-.56.314"
    />
  </Svg>
)

export const SearchIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke={ color ?? "#fff" }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.241 10.252 14 14m-2.167-7.583A5.417 5.417 0 1 1 1 6.417a5.417 5.417 0 0 1 10.833 0Z"
    />
  </Svg>
)
export const SingleMusicIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill={ color ?? "#fff" }
      d="M11.069.019a2.75 2.75 0 0 0-2.905 1.795c-.098.27-.132.562-.148.869a17.25 17.25 0 0 0-.016.83v8.537a4.75 4.75 0 1 0 1.5 3.464v-8.79c.105.056.218.113.343.175l2.707 1.354c.418.209.759.379 1.038.5.281.123.558.223.843.256a2.75 2.75 0 0 0 2.905-1.794c.098-.27.132-.563.148-.87.016-.303.016-.684.016-1.151V5.11c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.452-.281-.764-.437L12.95.775c-.418-.209-.759-.379-1.038-.5-.28-.123-.558-.223-.843-.256Z"
    />
  </Svg>
)
