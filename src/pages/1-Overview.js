import React, { useEffect, useState } from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import './Overview.css';
import { startThreeJS } from "../components/threejs/three";
import ProjectData from '../assets/data/projectDataV2.json'
import { matchProjectToStudent } from '../../src/components/matchProjectToStudent.js'
import { Cloudbutton } from "../components/cloudbutton";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { currentMajor } from "../components/currentMajor";
import FindProjectFromPerson from "../components/FindProjectFromPerson";
import $ from "jquery";
import anime from 'animejs/lib/anime.es.js';

export function Overview(props) {
    useEffect(() => {
        startThreeJS();
    })

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 }
        },
        exit: {
            y: '200vh',
            x: '100vw',
            transition: { ease: 'easeInOut' },
            scale: 5
        },
        cloud: {
            y: '200vh',
            transition: { ease: 'easeInOut', duration: .6 },
            scale: 0.1
        },
        open: {
            opacity: 1, y: '-200vh'
        },
        closed: { opacity: 0, x: "-100%" },
    }
    console.log("yeah testing " + FindProjectFromPerson(0, 0, props.selectedMajor)["Mediafile_1"])
    var screenSize = $(window).width()

/*
    $('.filter span:not(.clear)').on('click', function(){
        var filter = $(this).data('filter')
        var filterTitle = $(this).data('filter-title')

        // draggable('disable')
        var zoomOut = anime({
            targets: '.pop',
            scale: [1,0],
            opacity: 0,
            direction: 'alternate',
            loop: false,
            easing: 'easeInOutQuart',
            duration: 300,
            delay: function(el, i, l) {
                return i * 65;
            },
            complete: function(anim) {
                $('.person-list').addClass('filtered')
                $('.when-filtered').removeClass('hide')
                $('.when-filtered h2').html(filterTitle)
                $('.person-list .circle').each(function(){
                    if ($(this).data('category') === filter) {
                        $(this).addClass('filtered').css('margin-left', '0px').css('margin-top', '0px')
                    }
                    else {
                        $(this).addClass('hidden').css('margin-left', '0px').css('margin-top', '0px')
                    }
                })
            }
        });

        var promise = zoomOut.finished.then(zoomIn);

        return false

    })

    $('.clear-filter').on('click', function(){

        $('.person-list .when-filtered').addClass('hide')

        var zoomOut = anime({
            targets: '.pop',
            scale: [1,0],
            opacity: 0,
            direction: 'alternate',
            loop: false,
            easing: 'easeInOutQuart',
            duration: 300,
            delay: function(el, i, l) {
                return i * 65;
            },
            complete: function(anim) {
                $('.person-list').removeClass('filtered')
                $('.person-list .circle').each(function(){
                    $(this).removeClass('filtered hidden');
                });
                randomize()
            }
        });

        var promise = zoomOut.finished.then(zoomIn);

    });*/

    function randomize() {
console.log("Randomize")
        var container = $('.person-list')
        var item = $('.personPosition')
        var containerWidth = container.width()
        var itemWidth = item.width()
        var maxWidth = 100 - (itemWidth/containerWidth * 100)
        var minimumDiffernce = 20
        var zIndex = 1000
        console.log("Item " + item)
        console.log("Container " + container)
        item.each(function(i, e){
            var $item = $(this)
            var $prev = $item.prev()
            var prevXpos = $prev.length ? $prev.data("xPos") : -1

            var xPos = getRandomX(maxWidth)
            while(prevXpos > -1 && Math.abs(xPos-prevXpos) < minimumDiffernce){
                xPos = getRandomX(maxWidth)
            }

            var yPos =  i ? Math.floor(Math.random() * 20) + 1 : 0

            $item
                .css('z-index', (zIndex - i))
                .css('margin-left', xPos + '%')
                .css('margin-top', '-' + yPos + 'px')
                .data({xPos: xPos})

        })
    }

    function getRandomX(maxWidth){
        return Math.floor(Math.random() * maxWidth) + 1
    }

    randomize();

    function convertToAbsolute() {
        var item = $('.personPosition')

        item.each(function(){
            $(this)
                .css('margin-top', '0')
                .css('top', $(this).find('.circle-container').position().top + 'px')
                .css('margin-left', '0')
                .css('left', $(this).find('.circle-container').position().left + 'px')
            setTimeout(function(){
                $('.personPosition').addClass('abs')
            }, 3000)
        })
    }

    // var iso = new Isotope( '.person-list', {
    // 	itemSelector: '.circle',
    // 	masonry: {
    // 		columnWidth: '.grid-sizer'
    // 	}
    // });


    function zoomIn() {
        var zoomIn = anime({
            targets: '.pop',
            scale: [0,1],
            opacity: 1,
            direction: 'alternate',
            easing: 'easeInOutQuart',
            loop: false,
            delay: function(el, i, l) {
                return i * 65;
            },
            complete: function(anim) {
                // draggable('enable')
            }
        });
    }

    setTimeout(function(){
        zoomIn();
    }, 500)

    $(window).on('resize', function(){
        var newScreenSize = $(window).width()
        var resizeDifference = (screenSize - newScreenSize)
        resizeDifference = Math.abs(resizeDifference)
        console.log(resizeDifference)
        if (resizeDifference > 200) {
            console.log('re-shuffle')
            screenSize = newScreenSize
            randomize();
        }
    })

    // $('.hero-banner').on('init', function(slick){
    // 	// Changing the defaults
    // 	// window.sr = ScrollReveal({ reset: true });
    // });

    // $('.hero-banner').slick({
    // 	rows: 0,
    // 	arrows: false,
    // 	fade: true,
    // 	autoplay: true,
    // 	speed: 2000,
    // 	autoplaySpeed: 2000
    // })


    return (
        <>
            <div className="component-display">
                <div id="three-js" className={"person-list"}>
                </div>
                <Cloudbutton onClick={() => setIsOpen(true)} />
                {currentMajor(props.selectedMajor).PERSONAL_DETAILS.map((user) => (
                    <motion.div exit={"exit"}

                        animate={isOpen ? "open" : "visible"}
                        variants={variants} className="test ">
                        <Person className={"personPosition"}
                            name={user.FirstName}
                            surname={user.Surname}
                            major={user.Major}
                            id={user.virtualID}
                            key={user.virtualID}
                            position={"pos" + user.virtualID}

                            // Uff
                            projectMedia1_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia1_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia1_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_3"]
                            }
                            // Imagine a smart function call here
                            projectMedia2_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia2_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia2_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_3"]
                            }
                            // copy the pasta the hell out of it 
                            projectMedia3_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia3_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia3_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_3"]
                            }
                            clickedID={user.virtualID}
                            selectedMajor={props.selectedMajor}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}


