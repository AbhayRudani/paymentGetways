import React, {useRef, useState} from 'react';
import SignatureScreen, {SignatureViewRef} from 'react-native-signature-canvas';
import RNFS from 'react-native-fs';

interface Props {
  text: string;
  onOK: (signature) => void;
}

const demoScreen1: React.FC<Props> = ({text, onOK}) => {
  const [base64, setBase64] = useState('');
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = signature => {
    console.log(signature);
    // onOK(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleEnd = () => {
    ref.current?.readSignature();
  };

  const ABC = () => {
    const imageDate = base64;
    const imagePath = `${RNFS.TemporaryDirectoryPath}image.jpg`;
    RNFS.writeFile(imagePath, imageDate, 'base64').then(() =>
      console.log('Image converted to jpg and saved at ' + imagePath),
    );
  };

  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleSignature}
      onEmpty={handleEmpty}
      onClear={handleClear}
      autoClear={true}
      descriptionText={text}
    />
  );
};

export default demoScreen1;
