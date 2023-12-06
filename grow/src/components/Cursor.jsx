import React from 'react'
import '../components/Page.css'
import { useState, useEffect } from 'react';

export default function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isCursorTransparent, setCursorTransparent] = useState(false);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
    //   ______trance___
    const tranceElements = document.querySelectorAll('.trance');

    if (tranceElements) {
        tranceElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                setCursorTransparent(true);
            });

            element.addEventListener('mouseleave', () => {
                setCursorTransparent(false);
            });
        });
    }
    // _______







        
        document.addEventListener('mousemove', handleMouseMove);
        const expElement = document.getElementById('exp');
        const changeCursorColorToRed = () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.height = "60px";
                cursor.style.width = "60px";
                // crsr.style.backgroundColor="#DDF400"
            }
        };

        // Function to reset the cursor color
        const resetCursorColor = () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.height = "20px"; // Set the normal height here
                cursor.style.width = "20px";  
                // cursor.style.backgroundColor="white"
            }
        };

        // Add event listeners to the "exp" element
        if (expElement) {
            expElement.addEventListener('mouseenter', changeCursorColorToRed);
            expElement.addEventListener('mouseleave', resetCursorColor);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (expElement) {
                expElement.removeEventListener('mouseenter', changeCursorColorToRed);
                expElement.removeEventListener('mouseleave', resetCursorColor);
            }


            if (tranceElements) {
                tranceElements.forEach((element) => {
                    element.removeEventListener('mouseenter', () => {
                        setCursorTransparent(true);
                    });

                    element.removeEventListener('mouseleave', () => {
                        setCursorTransparent(false);
                    });
                });
            }
        };
    }, []);
    const cursorStyle = {
        opacity: isCursorTransparent ? 0 : 1,
        left: cursorPosition.x + 'px',
        top: cursorPosition.y + 'px',
    };



    return (
        <div className="custom-cursor" style={cursorStyle}></div>
    )
}
