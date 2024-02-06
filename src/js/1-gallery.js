
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { loadEnv } from "vite";

const lightbox = new SimpleLightbox('.gallery a', { /* options */ })

console.log(SimpleLightbox);