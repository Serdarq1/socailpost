





// Sayfayı belirtilen URL'ye yönlendiren fonksiyon
function sayfaYonlendir(url) {
  window.location.href = window.location.href.replace(/[^/]+$/, '') + url;
}


// Sayfanın index sayfası mı yoksa sohbet sayfası mı olduğunu kontrol et
const isIndexOpen = window.isIndexPage;
const isChatOpen = window.isChatPage;

if (isIndexOpen) {
  // Index sayfası lojikleri
  const kullaniciAdi = document.getElementById("kullanici-adi");
  const kullaniciMail = document.getElementById("email");
  const kullaniciBio = document.getElementById("bio");
  const kullaniciImgInput = document.getElementById("kullanici-img");
  const sifre = document.getElementById('sifre');

  function kayitOl() {
    // Kullanıcı giriş değerlerini al
    const kullaniciAdiValue = kullaniciAdi.value;
    const kullaniciMailValue = kullaniciMail.value;
    const kullaniciBioValue = kullaniciBio.value;
    const sifreValue = sifre.value;

    // Seçilen resim dosyasını al
    const kullaniciImgFile = kullaniciImgInput.files[0];

    // Eğer bir resim seçildiyse
    if (kullaniciImgFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Verileri localStorage'a kaydet
        kullaniciBilgileriniLocalStorageKaydet(kullaniciAdiValue, sifreValue, kullaniciMailValue, kullaniciBioValue, e.target.result);

        // Giriş sayfasına yönlendir
        alert('Kayıt Başarılı!');
        sayfaYonlendir('giris.html');
      };

      reader.readAsDataURL(kullaniciImgFile);
    } else {
      // Eğer resim seçilmediyse
      kullaniciBilgileriniLocalStorageKaydet(kullaniciAdiValue, sifreValue, kullaniciMailValue, kullaniciBioValue);

      // Giriş sayfasına yönlendir
      alert('Kayıt Başarılı!');
      sayfaYonlendir('giris.html');
    }
  }

  function kullaniciBilgileriniLocalStorageKaydet(kullaniciAdi, sifre, mail, bio, resim = '') {
    localStorage.setItem('kullaniciAdi', kullaniciAdi);
    localStorage.setItem('sifre', sifre);
    localStorage.setItem('kullaniciMail', mail);
    localStorage.setItem('kullaniciBio', bio);
    localStorage.setItem('kullaniciImg', resim);
  }
  
  
  function girisYap() {
    const kullaniciGirisi = document.getElementById('kullanici-girisi').value
    const kullaniciSifre = document.getElementById('kullanici-sifre').value


    

  
    const kayitliIsim = localStorage.getItem('kullaniciAdi')
    const kayitliSifre = localStorage.getItem('sifre')
  
    if (kullaniciGirisi === kayitliIsim && kullaniciSifre === kayitliSifre) {
      alert('Giriş Başarılı!')
      anaSayfaGecisi("index.html")
    } else {
      alert('Geçersiz kullanıcı ya da şifre.')
    }
  }
  
  function formDegistir(girisSayfası) {
    // giriş sayfasına yönlendirme
    window.location.href = window.location.href.replace(/[^/]+$/, '') + girisSayfası
  }
  
  function anaSayfaGecisi(anasayfa){
     // ana sayfaya yönlendirme
     window.location.href = window.location.href.replace(/[^/]+$/, '') + anasayfa
  }
  
  function mesajGecis(mesaj){
    // mesaj sayfasına yönlendirme
    window.location.href = window.location.href.replace(/[^/]+$/, '') + mesaj
  }
  
  const friends = document.querySelector(".fa-user-group")
  const friendsList = document.querySelector(".friends-list")
  const main = document.querySelector(".main")
  const hesapMail = document.querySelector(".account-mail")
  const hesapAdi = document.querySelector(".account-name")
  const hesapBio = document.querySelector(".person-bio")
  const hesapResim = document.querySelector(".account-img")
  const cikisYap = document.querySelector(".log-out-btn")
  
  function showFriends() { 
    friends.addEventListener("click", () => {
      friendsList.classList.toggle("d-none")
      friends.classList.toggle("text-light")
      main.classList.toggle("col-9")
      main.classList.toggle("col-7")
   })
  }
  showFriends()
  
  function kullaniciBilgileri(){

    

  
    const girisMailHesabi = localStorage.getItem("kullaniciMail")
    const girisAdi = localStorage.getItem("kullaniciAdi")
    const girisBio = localStorage.getItem("kullaniciBio")
    const girisResim = localStorage.getItem("kullaniciImg")
    
    hesapMail.innerHTML = `${girisMailHesabi}`
    hesapAdi.innerHTML = `@${girisAdi}`
    hesapBio.innerHTML = `${girisBio}`
    hesapResim.setAttribute("src", girisResim)
  
    cikisYap.addEventListener("click", () => {
      formDegistir("giris.html")
    })
  }
  kullaniciBilgileri()
}else if(isChatOpen){
  const kullaniciAdi = document.getElementById("kullanici-adi");
  const kullaniciMail = document.getElementById("email");
  const kullaniciBio = document.getElementById("bio");
  const kullaniciImgInput = document.getElementById("kullanici-img");
  const sifre = document.getElementById('sifre');

function kayitOl() {
  // verileri al
  let kullaniciAdiValue = kullaniciAdi.value;
  let kullaniciMailValue = kullaniciMail.value;
  let kullaniciBioValue = kullaniciBio.value;
  let sifreValue = sifre.value;

  // resmi al
  let kullaniciImgFile = kullaniciImgInput.files[0];

  // resim seçildiyse koşulu
  if (kullaniciImgFile) {
    // resimi url olarak algıla
    const reader = new FileReader();
    reader.onload = function (e) {
      


      // verileri kaydet
      localStorage.setItem('kullaniciAdi', kullaniciAdiValue);
      localStorage.setItem('sifre', sifreValue);
      localStorage.setItem('kullaniciMail', kullaniciMailValue);
      localStorage.setItem('kullaniciBio', kullaniciBioValue);
      localStorage.setItem('kullaniciImg', e.target.result);

      // giriş sayfasına yönlendir
      alert('Kayıt Başarılı!');
      formDegistir('giris.html');
    };

    reader.readAsDataURL(kullaniciImgFile);
  }else {

    

    // resim seçilmezse
    // resim dışı verileri kaydet
    localStorage.setItem('kullaniciAdi', kullaniciAdiValue);
    localStorage.setItem('sifre', sifreValue);
    localStorage.setItem('kullaniciMail', kullaniciMailValue);
    localStorage.setItem('kullaniciBio', kullaniciBioValue);

    // giriş sayfasına yönlendir
    alert('Kayıt Başarılı!');
    formDegistir('giris.html');
  }
}


function girisYap() {
  const kullaniciGirisi = document.getElementById('kullanici-girisi').value
  const kullaniciSifre = document.getElementById('kullanici-sifre').value

  


  const kayitliIsim = localStorage.getItem('kullaniciAdi')
  const kayitliSifre = localStorage.getItem('sifre')

  if (kullaniciGirisi === kayitliIsim && kullaniciSifre === kayitliSifre) {
    alert('Giriş Başarılı!')
    anaSayfaGecisi("index.html")
  } else {
    alert('Geçersiz kullanıcı ya da şifre.')
  }
}

function formDegistir(girisSayfası) {
  // giriş sayfasına yönlendirme
  window.location.href = window.location.href.replace(/[^/]+$/, '') + girisSayfası
}

function anaSayfaGecisi(anasayfa){
   // ana sayfaya yönlendirme
   window.location.href = window.location.href.replace(/[^/]+$/, '') + anasayfa
}

function mesajGecis(mesaj){
  // mesaj sayfasına yönlendirme
  window.location.href = window.location.href.replace(/[^/]+$/, '') + mesaj
}

const friends = document.querySelector(".fa-user-group")
const friendsList = document.querySelector(".friends-list")
const main = document.querySelector(".main")
const hesapMail = document.querySelector(".account-mail")
const hesapAdi = document.querySelector(".account-name")
const hesapBio = document.querySelector(".person-bio")
const hesapResim = document.querySelector(".account-img")
const cikisYap = document.querySelector(".log-out-btn")


const girisResim = localStorage.getItem("kullaniciImg")
hesapResim.setAttribute("src", girisResim)




function showFriends() { 
  friends.addEventListener("click", () => {
    friendsList.classList.toggle("d-none")
    friends.classList.toggle("text-light")
    main.classList.toggle("col-9")
    main.classList.toggle("col-7")
 })
}
showFriends()

const mesajGonderImg = document.getElementById("send");
const mesajInput = document.querySelector(".send-message-input");
const mesajKaydetAlani = document.getElementById("parent-div");
const chatLastPerson = document.querySelector(".chat-last-person")

// Kullanıcı bir mesaj gönderdiğinde bu mesajlarla yanıt ver
const predefinedResponses = [
  "Ne demek istediğini pek anlamadım.",
  "Bu ilginç!",
  "Daha fazla anlat lütfen.",
  "Buna cevap veremem.",
  "Sen nasılsın?"
];

mesajGonderImg.addEventListener("click", () => {
  const mesajMetni = mesajInput.value;

  


  // Yeni bir mesaj oluşturmadan önce girişin boş olup olmadığını kontrol et
  if (mesajMetni.trim() !== "") {
    // Kullanıcının mesajını localStorage'a kaydet
    localStorageaMesajKaydet("currentUser", mesajMetni);

    // Kullanıcının mesajını ekranda göster
    mesajGoster("currentUser", mesajMetni);

    // Diğer kişinin yanıtını simüle et
    const yanit = rastgeleYanitAl();
    // Yanıtı localStorage'a kaydet
    localStorageaMesajKaydet("otherPerson", yanit);
    
    // Yanıtı ekranda göster
    mesajGoster("otherPerson", yanit);

    // Mesaj gönderildikten sonra input'u temizle
    mesajInput.value = "";
  }
});

// Kullanıcının mesajını gönderirken localStorage'a kaydet
function localStorageaMesajKaydet(gonderen, metin) {

  const saklananMesajlar = JSON.parse(localStorage.getItem("chatMessages")) || [];
  saklananMesajlar.push({ gonderen, metin });
  localStorage.setItem("chatMessages", JSON.stringify(saklananMesajlar));
}

// Bir mesajı sohbet penceresinde göstermek için fonksiyon
function mesajGoster(gonderen, metin) {
  const yeniMesaj = document.createElement("div");

  if (gonderen === "currentUser") {
    yeniMesaj.classList.add("d-flex", "justify-content-end");
  } else {
    // Diğer kişiden gelen mesajlar için stil ekle
  }

  yeniMesaj.innerHTML = `
    <div class="message text-light rounded-pill w-25 p-2">
      ${metin}
    </div>
  `;

  mesajKaydetAlani.appendChild(yeniMesaj);
}

// predefinedResponses'tan rastgele bir yanıt almak için fonksiyon
function rastgeleYanitAl() {
  const rastgeleIndex = Math.floor(Math.random() * predefinedResponses.length);
  return predefinedResponses[rastgeleIndex];
}

// Sayfa yüklendiğinde localStorage'dan mesajları göster
function saklananMesajlariGoster() {
  

  const saklananMesajlar = JSON.parse(localStorage.getItem("chatMessages")) || [];

  saklananMesajlar.forEach((mesaj) => {
    mesajGoster(mesaj.gonderen, mesaj.metin);
  });
}

// Sayfa yüklendiğinde saklanan mesajları göster
saklananMesajlariGoster();


const chatPerson1 = document.querySelector(".chat-person1")
const chatPerson2 = document.querySelector(".chat-person2")
const chatPerson3 = document.querySelector(".chat-person3")
const msg1 = document.querySelector(".msg1")
const msg2 = document.querySelector(".msg2")
const msg3 = document.querySelector(".msg3")


function showChats(){
  chatPerson1.addEventListener("click", () => {
    msg1.classList.remove("d-none")
    msg2.classList.add("d-none")
    msg3.classList.add("d-none")
    chatPerson1.classList.add("opacity")
    chatPerson2.classList.remove("opacity")
    chatPerson3.classList.remove("opacity")
  })

  chatPerson2.addEventListener("click", () => {
    msg1.classList.add("d-none")
    msg2.classList.remove("d-none")
    msg3.classList.add("d-none")
    chatPerson1.classList.remove("opacity")
    chatPerson2.classList.add("opacity")
    chatPerson3.classList.remove("opacity")
  })

  chatPerson3.addEventListener("click", () => {
    msg1.classList.add("d-none")
    msg2.classList.add("d-none")
    msg3.classList.remove("d-none")
    chatPerson1.classList.remove("opacity")
    chatPerson2.classList.remove("opacity")
    chatPerson3.classList.add("opacity")
  })
}
showChats()}