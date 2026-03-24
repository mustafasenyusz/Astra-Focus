import { Redirect } from 'expo-router';

export default function Index() {
  // Kanka uygulama açıldığı an "hoop welcome'a git" diyoruz
  return <Redirect href="/welcome" />;
}