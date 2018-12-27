<template>
    <div id= "title-container" class="container ">
        <h1> EVIC </h1>
        <h2>  XIV IEEE Escuela de Verano Latinoamericana en Inteligencia Computacional </h2>
        <div class="separator"> </div>
        <h3>  12 - 13 - 14 / Diciembre de 2018 </h3>
        <h4>  Edificio de Vicerrectoría de Vinculación con el Medio - Universidad de 
            Santiago de Chile. Las Sophoras 175, Estación Central, Santiago </h4>
        <a href="https://drive.google.com/file/d/15zgccc5dfIOVKlQAg_Cavqi9Nv20caqZ/view?usp=sharing">Afiche EVIC</a>

        <transition-group name="thumbnailfade" tag="div">
            <img id = "gallery" v-for="(thumb, index) in images" 
                :key="index" 
                v-if="galleryFilter === 'all' ||
                    thumb.filter === galleryFilter"
                @click="showLightbox(thumb.name)"  
                :src="thumbnailDir + thumb.name" 
                :alt="thumb.alt" 
                :title="thumb.alt" />
        </transition-group>
        <lightbox id="mylightbox" 
            ref="lightbox"
            :images="images"
            :directory="thumbnailDir"
            :filter="galleryFilter"
            :timeoutDuration="5000"
        />
        <a href="https://drive.google.com/drive/folders/1oEQBX2qKURZqEiLZ55IuEA3epxnT77i2">Galería 1</a>
        <a href="https://drive.google.com/drive/folders/16GaH4zZxmF3rnXvwjQfC5hlHW5U04TA3">Galería 2</a>

    </div>
</template>

<script>
var photoDir = '';
var imageList = 
  [{'name':'https://lh4.googleusercontent.com/k4FhsVHzFyEsOAODh3JgoDm74RyexJHKvdp8q3hA8lMUbp3iyK5YNHbuULvM_oohQOfKfnnlw_5qTDgsQ6UY=w1920-h951', 
    'alt':'Gary Fogel', 
    'filter':'evic' },
   
   {'name':'https://lh3.googleusercontent.com/84jjXlB1ROb-l8cX8Ypqs763xm4wm1-RSeQpthPvHCysdVxijXegTyfNtpr0nBuG2W9S3qB29W76K27GhAjN=w1920-h951', 
    'alt':'Pavlos Protopapas', 
    'filter':'evic' }, 
   
   {'name':'https://lh6.googleusercontent.com/_NP8xch7zaHEKaYNfZm0tIpBnWoeA46ZxvbjUKJB6v0J4RMTo2ve6JwBPZFXbEjGX0KOH-F1_wFUm5wh0y8y=w1920-h951', 
    'alt':'Millaray Curilem', 
    'filter':'nature' },
   
   {'name':'https://lh5.googleusercontent.com/9db3u-5Hd2JQstns1A3kb5wJqlx86gamW6c5fUcgOcAwk6Ml9LQP-Ctpr08y5eGe3Tpgcavi5gRjUA3FOPIp=w1920-h951', 
    'alt':'Gonzalo Acuña', 
    'filter':'evic' },
   
   {'name':'https://lh6.googleusercontent.com/_Wd--xw7LM13flmJzjPojzKr-ZCYou36So1dL8u8In5v2dxbP1Qg-8XCYhtymQ5YpUmzdawdifxSBb5YSmDR=w1920-h951', 
    'alt':'Participantes', 
    'filter':'nature' },
   
   {'name':'https://lh3.googleusercontent.com/z1KYWrXruZI6Mui2wH-kdNEnNF5B3XO2bm-53XAKb5Ot0gAFGTmtoA26sGVzuvUPwenViWT6_3FuA9F5s-NP=w1920-h951', 
    'alt':'Participantes mujeres', 
    'filter':'nature' },
   
   {'name':'https://lh4.googleusercontent.com/plOcpSTTUftnY57ztoQffaQxcq4wCDeAca2KDjWlcLmEQakIKRDNTglSQDfilPj4PJzbvrR5F2yRt9VjPfEY=w1920-h951', 
    'alt':'EVIC 2018', 
    'filter':'evic' }, 
   
   {'name':'https://lh5.googleusercontent.com/mCXbrupEX0-uFO2QOiINQAfw7QnVQDzXKv2L9kmOeRetqsNPLsJ25LkGf3u6aaugPeC96JluzRnLudWKDPXi=w1920-h951', 
    'alt':'EVIC 2018', 
    'filter':'nature' } ];
export default {
    data: function(){
        return {
            thumbnailDir: photoDir,
            images: imageList,
            galleryFilter: 'all'
        };
    },
    methods:{
        showLightbox: function(imageName) {
            this.$refs.lightbox.show(imageName);
        },
        updateFilter(filterName) {
            this.galleryFilter = filterName;
        }
    },
}
</script>


<style>
    @import './Title.css';
</style>

