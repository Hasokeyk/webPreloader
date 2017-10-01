# webPreloader Nedir?
Web preloaderlar web sitesi yüklenirken sayfada oluşan görüntü bozukluklarını giderilmek için üretilmiş web teknolojisidir. Web Preloader web sitesi yüklenirken tam ekran olarak çalışır ve ekranı kaplar. Ekran da sadece yükleme animasyonu oynar. 

# webPreloader Nasıl Kullanılır?

Öncelikle kullanabilmek için JQuery html içerisine çağırılmış olması gerekmektedir. 

Jquery kütüphanesinin hemen altına aşağıdaki javascript ve css dosyaları çağrılmalıdır.

	<script type="text/javascript" src="assets/js/webPreloader.js"></script>
	<link rel="stylesheet" href="assets/css/webPreloader.css">

# Uzak dosyadan çağırmak isterseniz.

	<script type="text/javascript" src="//app.hayatikodla.net/webPreloader/webPreloader.js"></script>
	<link rel="stylesheet" href="//app.hayatikodla.net/webPreloader/webPreloader.css">

# HTML Etiketini Ekleme
Html etiketi sayfa yüklendiğinde DOM'da olması gerektiği için kendi dosyanıza eklenmesi gerekmektedir.

	<body>

Etiketinin hemen altına

	<div class="webPreloader">
		<div id="cssload-pgloading">
			<div class="cssload-loadingwrap">
				<ul class="cssload-bokeh">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>

yukarıdaki html etiketlerini eklemeniz gerekmektedir.


# Demo

https://app.hayatikodla.net/webPreloader/demo/

# Parametreler

Şu an kullanılabilir parametreler aşağıdaki gibidir.

	sound : Yüklenirken çalacak olan mp3 dosyasının tam yolu