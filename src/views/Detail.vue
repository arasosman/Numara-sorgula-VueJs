<template>
    <div class="detail">
        <section class="list-pg-bg">
            <div class="container">
                <div class="row">
                    <div class="com-padd">
                        <div class="list-pg-lt list-page-com-p">
                            <!--<div class="pglist-p1 pglist-bg pglist-p-com" id="ld-abour">
                                <div class="pglist-p-com-ti">
                                    <h3><span>About</span> Taj Luxury</h3> </div>
                                <div class="list-pg-inn-sp">
                                    <div class="share-btn">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook fb1"></i> Share On Facebook</a> </li>
                                            <li><a href="#"><i class="fa fa-twitter tw1"></i> Share On Twitter</a> </li>
                                            <li><a href="#"><i class="fa fa-google-plus gp1"></i> Share On Google Plus</a> </li>
                                        </ul>
                                    </div>
                                    <p>Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia, Mauritius, Egypt and Saudi Arabia.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>-->
                            <div class="pglist-p3 pglist-bg pglist-p-com" id="ld-rew">
                                <div class="pglist-p-com-ti">
                                    <h3><span>Yorum Yazın</span></h3></div>
                                <div class="list-pg-inn-sp">
                                    <div class="list-pg-write-rev">

                                        <form class="col" @submit.prevent="SendComment">
                                            <p>Numara hakkındaki düşündüklerinizi paylaşabilirsiniz. Lütfen kurallara
                                                uyarak yorum yapınız.</p>
                                            <div class="row">
                                                <div class="input-field col s6">
                                                    <span class="waves-effect waves-light btn btn-success"
                                                          @click="Positive" :disabled="negative"> Güvenli</span>
                                                </div>
                                                <div class="input-field col s6">
                                                    <span class="waves-effect waves-light btn btn-danger"
                                                          @click="Negative" :disabled="positive"> Dolandırıcı</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <input id="re_name" type="text" class="validate"
                                                           v-model="commentObj.name">
                                                    <label for="re_name">İsminiz</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col s12">
                                                    <select id="category" v-model="selectedCategory">
                                                        <option disabled value="">Kategori Seçiniz</option>
                                                        <option v-for="item in commentCategory">{{item}}</option>
                                                    </select>
                                                    <label for="category"></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <textarea id="re_msg" class="materialize-textarea"
                                                              v-model="commentObj.comment"></textarea>
                                                    <label for="re_msg">Yorumunuz</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <button class="waves-effect waves-light btn-large full-btn">Yorum
                                                        Gönder
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="pglist-p3 pglist-bg pglist-p-com" id="ld-rer">
                                <div class="pglist-p-com-ti">
                                    <h3><span>User</span> Reviews</h3></div>
                                <div class="list-pg-inn-sp">
                                    <div class="lp-ur-all">
                                        <div class="lp-ur-all-left">
                                            <div class="lp-ur-all-left-1">
                                                <div class="lp-ur-all-left-11">Excellent</div>
                                                <div class="lp-ur-all-left-12">
                                                    <div class="lp-ur-all-left-13"></div>
                                                </div>
                                            </div>
                                            <div class="lp-ur-all-left-1">
                                                <div class="lp-ur-all-left-11">Good</div>
                                                <div class="lp-ur-all-left-12">
                                                    <div class="lp-ur-all-left-13 lp-ur-all-left-Good"></div>
                                                </div>
                                            </div>
                                            <div class="lp-ur-all-left-1">
                                                <div class="lp-ur-all-left-11">Satisfactory</div>
                                                <div class="lp-ur-all-left-12">
                                                    <div class="lp-ur-all-left-13 lp-ur-all-left-satis"></div>
                                                </div>
                                            </div>
                                            <div class="lp-ur-all-left-1">
                                                <div class="lp-ur-all-left-11">Below Average</div>
                                                <div class="lp-ur-all-left-12">
                                                    <div class="lp-ur-all-left-13 lp-ur-all-left-below"></div>
                                                </div>
                                            </div>
                                            <div class="lp-ur-all-left-1">
                                                <div class="lp-ur-all-left-11">Below Average</div>
                                                <div class="lp-ur-all-left-12">
                                                    <div class="lp-ur-all-left-13 lp-ur-all-left-poor"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lp-ur-all-right">
                                            <h5>Overall Ratings</h5>
                                            <p><span>4.5 <i class="fa fa-star" aria-hidden="true"></i></span> based on
                                                242 reviews</p>
                                        </div>
                                    </div>
                                    <div class="lp-ur-all-rat">
                                        <h5>Reviews</h5>
                                        <ul>
                                            <li>
                                                <div class="lr-user-wr-img"><img src="images\users\2.png" alt=""></div>
                                                <div class="lr-user-wr-con">
                                                    <h6>Jacob Michael <span>4.5 <i class="fa fa-star"
                                                                                   aria-hidden="true"></i></span></h6>
                                                    <span class="lr-revi-date">19th January, 2017</span>
                                                    <p>Good service... nice and clean rooms... very good spread of
                                                        buffet and friendly staffs. Located in heart of city and easy to
                                                        reach any places in a short distance. </p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i class="fa fa-thumbs-o-up"
                                                                                             aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i
                                                                class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Report</span> <i class="fa fa-flag-o"
                                                                                                aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Comments</span> <i
                                                                class="fa fa-commenting-o" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Share Now</span> <i
                                                                class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-google-plus"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-twitter"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-youtube"
                                                                            aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="lr-user-wr-img"><img src="images\users\3.png" alt=""></div>
                                                <div class="lr-user-wr-con">
                                                    <h6>Gabriel Elijah <span>5.0 <i class="fa fa-star"
                                                                                    aria-hidden="true"></i></span></h6>
                                                    <span class="lr-revi-date">21th July, 2016</span>
                                                    <p>The hotel is clean, convenient and good value for money. Staff
                                                        are courteous and helpful. However, they need more training to
                                                        be efficient.</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i class="fa fa-thumbs-o-up"
                                                                                             aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i
                                                                class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Report</span> <i class="fa fa-flag-o"
                                                                                                aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Comments</span> <i
                                                                class="fa fa-commenting-o" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Share Now</span> <i
                                                                class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-google-plus"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-twitter"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-youtube"
                                                                            aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="lr-user-wr-img"><img src="images\users\4.png" alt=""></div>
                                                <div class="lr-user-wr-con">
                                                    <h6>Luke Mason <span>4.2 <i class="fa fa-star"
                                                                                aria-hidden="true"></i></span></h6>
                                                    <span class="lr-revi-date">21th March, 2018</span>
                                                    <p>Too much good experience with hospitality, cleanliness, facility
                                                        and privacy and good value for money... To keep mind relaxing...
                                                        Keep it up... </p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i class="fa fa-thumbs-o-up"
                                                                                             aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i
                                                                class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Report</span> <i class="fa fa-flag-o"
                                                                                                aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Comments</span> <i
                                                                class="fa fa-commenting-o" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Share Now</span> <i
                                                                class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-google-plus"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-twitter"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-youtube"
                                                                            aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="lr-user-wr-img"><img src="images\users\5.png" alt=""></div>
                                                <div class="lr-user-wr-con">
                                                    <h6>Kevin Jack <span>3.6 <i class="fa fa-star"
                                                                                aria-hidden="true"></i></span></h6>
                                                    <span class="lr-revi-date">21th Aug, 2018</span>
                                                    <p>I am deaf. Bar is closed and Restaurant is okay ... It should be
                                                        more decoration as beautiful. I enjoyed swimming top floor and
                                                        weather is good</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i class="fa fa-thumbs-o-up"
                                                                                             aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i
                                                                class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Report</span> <i class="fa fa-flag-o"
                                                                                                aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Comments</span> <i
                                                                class="fa fa-commenting-o" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Share Now</span> <i
                                                                class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-google-plus"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-twitter"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-youtube"
                                                                            aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="lr-user-wr-img"><img src="images\users\6.png" alt=""></div>
                                                <div class="lr-user-wr-con">
                                                    <h6>Nicholas Tyler <span>4.4 <i class="fa fa-star"
                                                                                    aria-hidden="true"></i></span></h6>
                                                    <span class="lr-revi-date">21th Aug, 2018</span>
                                                    <p>Overall, it was good experience. Rooms were spacious and they
                                                        were kept very clean and tidy. Room service was good.</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i class="fa fa-thumbs-o-up"
                                                                                             aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i
                                                                class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Report</span> <i class="fa fa-flag-o"
                                                                                                aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Comments</span> <i
                                                                class="fa fa-commenting-o" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li><a href="#!"><span>Share Now</span> <i
                                                                class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-google-plus"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-twitter"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                                        <li><a href="#!"><i class="fa fa-youtube"
                                                                            aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="list-pg-rt">
                            <div class="pglist-p3 pglist-bg pglist-p-com">
                                <div class="pglist-p-com-ti pglist-p-com-ti-right">
                                    <h3><span>Numara</span> Hakkında</h3></div>
                                <div class="list-pg-inn-sp">
                                    <div class="list-pg-guar">
                                        <ul>
                                            <li>
                                                <div class="list-pg-guar-img"><img src="/images/icon/g1.png" alt="">
                                                </div>
                                                <h4>Operatör</h4>
                                                <p></p>
                                            </li>
                                            <li>
                                                <div class="list-pg-guar-img"><img src="/images/icon/g2.png" alt="">
                                                </div>
                                                <h4>Durum</h4>
                                                <p></p>
                                            </li>
                                            <li>
                                                <div class="list-pg-guar-img"><img src="/images/icon/g3.png" alt="">
                                                </div>
                                                <h4>Doğrulama</h4>
                                                <p></p>
                                            </li>
                                        </ul>
                                        <button class="waves-effect waves-light btn-large full-btn list-pg-btn"
                                                href="#!" data-dismiss="modal" data-toggle="modal"
                                                data-target="#list-quo">Değerlendir
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div class="pglist-p3 pglist-bg pglist-p-com">
                                <div class="pglist-p-com-ti pglist-p-com-ti-right">
                                    <h3><span>Diğer</span> Bilgiler</h3></div>
                                <div class="list-pg-inn-sp">
                                    <div class="list-pg-oth-info">
                                        <ul>
                                            <li>Kayıt Tarihi <span class="green-bg">open</span></li>
                                            <li>Güncelleme Tarihi <span>16</span></li>
                                            <li>Görüntülenme Sayısı <span>yes</span></li>
                                            <li>Yorum sayısı <span>yes</span></li>
                                            <li>Değerlendirme Sayısı <span>yes</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            >
        </section>
    </div>
</template>

<script>
    import NumberService from '../services/number.service'
    import CommentService from '../services/comment.service'

    export default {

        name: 'home',
        data() {
            return {
                numberData: {},
                number: 0,
                commentCategory: ['Dolandırıcılık', 'Tele satış', 'Sahte arama', 'Anketçi', 'Tehdit', 'Telefon Şakası'],
                selectedCategory: "",
                commentObj: {
                    name: "",
                    category: "",
                    comment: ""
                },
                negative: false,
                positive: false
            }
        },
        components: {},
        created() {
            this.number = this.$route.params.number;
            this.GetNumberData(this.number)
        },
        methods: {
            GetNumberData(number) {
                this.numberData = {};
                NumberService.GetNumberData(number)
                    .then((res) => {
                        this.numberData = res.data;
                    }).catch((err) => {
                    console.log(err)
                })
            },
            SendComment() {
                let data = {
                    number: this.number,
                    number_id: this.numberData.id,
                    comment: this.commentObj,
                };
                console.log(data);
                CommentService.SendComment(data)
                    .then((res) => {
                        console.log(res)
                    }).catch((err) => {
                    console.log(err)
                });
            },
            Negative() {
                if(this.negative){
                    this.negative = false
                    NumberService.SendPositive(this.numberData.id)
                }
                else {
                    this.negative = true;
                    NumberService.SendNegative(this.numberData.id)
                }

            },
            Positive() {
                if(this.positive){
                    this.positive = false;
                    NumberService.SendNegative(this.numberData.id)
                }else{
                    this.positive = false;
                    NumberService.SendPositive(this.numberData.id)
                }
            }
        }
    }
</script>

<style>

</style>
