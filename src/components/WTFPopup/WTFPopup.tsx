import { FC } from 'react';
import { Popup } from '../Popup';
import styles from './WTFPopup.module.scss';

export type WTFPopupProps = Readonly<{
  onClose: () => void;
}>;

export const WTFPopup: FC<WTFPopupProps> = ({ onClose }) => {
  return (
    <Popup
      title="WTF?!"
      onSuccess={onClose}
      onReject={onClose}
      withProceedButton={false}
      proceedButtonDisabled={false}
      withCancelButton={true}
    >
      <div className={styles.container}>
        <div className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially Lorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
        </div>

        <div className={styles.scheme}></div>
      </div>
    </Popup>
  );
};
