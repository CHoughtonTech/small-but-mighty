<template>
    <div class="info-container-fc">
        <div class="card custom-card-fc">
            <div v-if="!flipped" class="card-image">
                <figure class="image is-3by4">
                    <img :src="member.photo" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/user.png" alt="User Icon">                        
                        </figure>
                    </div>
                    <div class="media-content no-overflow-fc">
                        <p class="title is-4">{{member.relation}}</p>
                        <p class="subtitle is-6">{{member.name}}</p>
                    </div>
                </div>
                <div v-if="flipped" class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/calendarDate.png" alt="Date Icon">
                        </figure>
                    </div>
                    <div class="media-content no-overflow-fc">
                        <p class="title is-4">Date</p>
                        <p class="subtitle is-6">{{member.birthDate}}</p>
                        <p class="subtitle is-6">{{ageDiff}}</p>
                    </div>
                </div>
                <div v-if="flipped" class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/obesity.png" alt="Weight Icon">
                        </figure>
                    </div>
                    <div class="media-content no-overflow-fc">
                        <p class="title is-4">Weight</p>
                        <p class="subtitle is-6">{{weight}}</p>
                        <p class="subtitle is-6">{{weightDiff}}</p>
                    </div>
                </div>
                <div v-if="flipped" class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/ruler.png" alt="Length Icon">
                        </figure>
                    </div>
                    <div class="media-content no-overflow-fc">
                        <p class="title is-4">Length</p>
                        <p class="subtitle is-6">{{length}}</p>
                        <p class="subtitle is-6">{{lengthDiff}}</p>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-primary" @click="toggleCard">{{buttonText}}</button>
                </p>
            </footer>
        </div>
    </div>
</template>
<script>
import { conversionsMixin } from '../mixins/conversionsMixin';
export default {
    mixins: [conversionsMixin],
    props: {
        familyMember: Object
    },
    created() {
        this.member = this.familyMember;
        this.length = this.convertCMToIN(this.member.birthLength);
        this.weight = this.convertGramsToPounds(this.member.birthWeight);
    },
    computed: {
        weightDiff() {
            let gramDiff = this.member.birthWeight - this.$store.state.lucas.birthWeight;
            let weightDiff = this.gramsToPounds(gramDiff);
            return `My ${this.member.relation} weighed about ${weightDiff} more than me!`;
        },
        lengthDiff() {
            let cmDiff = this.member.birthLength - this.$store.state.lucas.birthLength;
            let inDiff = this.cMToIN(cmDiff);
            return `My ${this.member.relation} was about ${inDiff} longer than me!`;
        },
        ageDiff() {
            let ageDiff = this.daysDiff(this.member.birthDate, this.$store.state.lucas.birthDate);
            return `My ${this.member.relation} was ${ageDiff} old when I was born!`;
        },
        buttonText() {
            return this.flipped ? "Close" : "Compared to me!";
        }
    },
    data() {
        return {
            member: null,
            flipped: false,
            length: null,
            weight: null
        }
    },
    methods: {
        toggleCard() {
            this.flipped = !this.flipped;
        },
        daysDiff(sd, ed){
            let startDate = new Date(sd);
            let endDate = new Date(ed);
            let diff = Math.floor(endDate.getTime() - startDate.getTime());
            let day = 1000 * 60 * 60 * 24;
            let days = Math.floor(diff/day);
            let years = Math.floor(days/365);
            return `${years} years`;
        },
        gramsToPounds(grams) {
            const ouncePerGram = 0.035274;
            let totalOunces = grams * ouncePerGram;
            let pounds = Math.floor(totalOunces / 16);
            let ounces = Math.ceil((totalOunces - (pounds * 16)) * 2) / 2;
            if (!isNaN(pounds) && !isNaN(ounces)) {
                return `${pounds} lbs ${ounces} oz`;
            } else if (!isNaN(pounds)) {
                return `${pounds} lbs`
            } else {
                return null;
            }
        },
        cMToIN(cm) {
            const inchPerCM = 0.393701;
            let inches = Math.ceil(cm * inchPerCM * 2) / 2;
            if (!isNaN(inches)) {
                return `${inches} inches`
            } else {
                return null;
            }
        }
    }
}
</script>
<style>
.info-container-fc {
    max-width: 350px;
    margin: 5px;
    display: inline-flex;
}
.custom-card-fc {
    border-radius: 25px;
    background-color:lightblue;
    min-width: 325px;
}
.no-overflow-fc {
    overflow: hidden;
}
</style>