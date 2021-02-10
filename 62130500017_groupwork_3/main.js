const app = {
    data() {
        return {
            gallery: [{
                    picture_name: "name1",
                    src: "./Images/1261770.jpg",
                    fav: false
                },
                {

                    picture_name: "name2",
                    src: "./Images/f192aec15c65b3fd9efb710ccd6efa24.jpg",
                    fav:false
                },
                {

                    picture_name: "name3",
                    src: "./Images/minimalism-mountains-stars-mountain-people-hd-wallpaper-preview.jpg",
                    fav:false
                }
            ]
        }
    },
    methods:{
        toggleHeart(index){
            this.gallery[index].fav =!this.gallery[index].fav
        }
    },
    computed:{
        countUndone(){
            return this.gallery.filter(gallery =>gallery.fav).length
        }
    }

}
Vue.createApp(app).mount('#app')