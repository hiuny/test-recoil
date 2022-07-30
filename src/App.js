import { RecoilRoot } from 'recoil'
import FontButton from './components/FontButton';
import Text from './components/Text';

function App() {
  return (
    <RecoilRoot>
      <Text />
      <FontButton />
    </RecoilRoot>
  );
}

export default App;
