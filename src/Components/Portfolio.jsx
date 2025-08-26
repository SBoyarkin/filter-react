import {Toolbar} from "./Toolbar.jsx";
import {ProjectList} from "./ProjectList.jsx";
import {useState} from "react";

const data = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]

export function Portfolio() {
    const [active, setActive] = useState('All');
    return (
        <>

            <div class="portfolio">
            <Toolbar   filters={["All", "Websites", "Flayers", "Business Cards"]}
                       selected={active}
                       onSelectFilter={setActive}
                />


            <ProjectList projects={data} filter={active}/>
            </div>
        </>
    )
}