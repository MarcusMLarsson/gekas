<h1> Gekås app </h1>

<h3> Beskrivning </h3>
<p> En kundcentrerad app för Gekås med positioneringsfunktioner. </p>

<h3> Snabbstart </h3>
<ul>
<b>Försteg </b>
<li> npm i -g expo-cli (se till att du kör Node V12 eller högre) </li>
<li> installera Expo Client ifrån appstore på en mobiltelefon  </li>
<li> inaktivera hyper-v </li>
<br>
<b>Kör via emulator </b>
<li> Ladda ner <a href="https://developer.android.com/studio"> Android Studio </a> med standard inställnignar </li>
<li> starta en "Android Virtual Device" </li>
<li> git clone https://github.com/MarcusMLarsson/gekas.git</li>
<li> cd in i "Client" mapp </li>
<li> expo start (expo start --tunnel om din firewall blockar access)</li>
<li> Nu skall en nytt fönster i browsern öppnas med Metro Bundler </li>
<li> klicka på "Run on Android device/emulator" i Metro Bundler eller tryck "a" i terminalen </li>
<li> Nu skall Android emulatorn köra din applikation </li>
<li> tryck ctrl + m (för Windows) för att öppna utvecklarmeny  </li>
<br>
<b> Kör via fysisk enhet (mobil) </b>
<li> Gå till Metro Bundler</li>
<li> Scanna QR koden med Expo Client (med din mobil) </li>
<li> Skaka mobilen för utvecklarmenyn </li>
</ul>


<h3> Dependencies </h3>
<ul>
<li> <a href="https://reactnative.dev/docs/getting-started"> React Native </a> </li>
<p> Ett ramvek för att bygga android och IOS applikationer med JavaScript. </p>
<li> <a href="https://expo.io/"> Expo </a> </li>
<p> Det finns två sätt att bygga en React Native applikation. Du kan använda "React Native CLI" eller "Expo CLI". Om du skapar ett projekt med React Native CLI 
så genereras separata mappar för Android och IOS. Detta tillvägagångssätt passar för folk som har tidigare erfarenhet av Android och IOS utvecklning. Med Expo har du inte olika mappar för Android och IOS. Vi har endast JavaScript kod. Med hjälp av Expo, blir det därför väldigt smidigt, snabbt och enkelt att bygga React Native applikationer.  
Nackdelen med Expo är att vi inte kan jobba direkt emot Native API (vilket inte behövs för majoriteten av appar). Det går också att ejecta ifrån Expo och få tillgång till Android och IOS mapparna om man
vill tweaka specifika delar. 
<li> <a href="https://developer.android.com/studio"> Android Studio </a> </li>
<p> När du utvecklar är det enklast att använda sig utav en simulator/emulator </p>
<li> <a href="https://apps.apple.com/se/app/expo-client/id982107779"> Expo Client </a> </li>
<p>  Simulatorer fungerar inte alltid 100 % som en fysisk enhet. Med Expo Client kan vi enkelt köra applikation på en fysisk enhet utan att behöva gå igenom
app store. Allt du behöver göra är att gå till
Metro Bundler och scanna QR koden med Expo Client</p>
