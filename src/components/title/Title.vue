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
  [{'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/2.JPG?raw=true', 
    'alt':'Gary Fogel', 
    'filter':'evic' },
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/5.JPG?raw=true', 
    'alt':'Pavlos Protopapas', 
    'filter':'evic' }, 
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/4.JPG?raw=true', 
    'alt':'Millaray Curilem', 
    'filter':'nature' },
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/7.JPG?raw=true', 
    'alt':'Gonzalo Acuña', 
    'filter':'evic' },
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/8.JPG?raw=true', 
    'alt':'Participantes', 
    'filter':'nature' },
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/participantesMujeres.JPG?raw=true', 
    'alt':'Participantes mujeres', 
    'filter':'nature' },
   
   {'name':'https://github.com/acme-development/evic2018v2/blob/develop/src/assets/images/6.JPG?raw=true', 
    'alt':'EVIC 2018', 
    'filter':'evic' }, 
   
   {'name':'https://raw.githubusercontent.com/acme-development/images/master/logo/logo.png', 
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

