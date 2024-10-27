import { get } from './utls.js';

import {
  footerLinks,
  socialLinks,
  mobileLinks,
  mainNavLinks,
  travelReviews,
  products,
  countries,
  blogs,
} from './data.js';

const countriesContainer = get('.countries-wrapper');
const productContainer = get('.product-container');
const prevBtn = get('.slider-prev');
const nextBtn = get('.slider-next');
const blogContainer = get('.fb-box-2');
const toggelNavBtn = get('.toggle-nav');
const linksContainer = get('.links-container');
const reviewsContainer = get('.reviews-container');
const footerLinksContainer = get('.footer-list-container');
const socialLinksContainer = get('.social-links-container');
const mobileLinksUl = get('.links');
const mainNavUl = get('.main-nav-links');

function toggleNav() {
  const links = get('.links');
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
}

toggelNavBtn.addEventListener('click', toggleNav);

function display() {
  function truncate(textArr, numberOfWords) {
    if (textArr.length > numberOfWords) {
      const truncatedWords = textArr.slice(0, numberOfWords);

      return truncatedWords.join(' ') + ' ...';
    }
  }

  productContainer.innerHTML = products
    .map(({ productName, url }) => {
      return `
    <article class="product">
    <div class="img-wrap">
      <img
        class="img"
        src="${url}"
        alt=""
      />
    </div>
    <div class="product-info">
      <p class="title-text"><span>${productName}</span></p>
      <p class="info">
        <span
          >12 Days of amazing fun and adventure for you and your friends
          to enjoy</span
        >
      </p>
      <div class="btn-container">
        <p class="price"><span class="price-span">£4000</span></p>
        <button class="enquire-btn">Enquire Now</button>
      </div>
    </div>
  </article>
    `;
    })
    .join(' ');

  countriesContainer.innerHTML = countries
    .map(({ countryName, url, moneyOff, fromPrice }) => {
      return `
    <article class="country-card">
    <div class="img-wrapper">
      <img
        src="${url}"
        alt=""
        class="country-img"
      />

      <div class="card-info-div">
        <h3>${countryName}</h3>
        <p><span>From £${fromPrice}</span></p>
      </div>

      <div class="offer-div">
        <span
          >${moneyOff}/% <br />
          Off</span
        >
      </div>
    </div>
  </article>
    `;
    })
    .join(' ');

  blogContainer.innerHTML = blogs
    .slice(0, 4)
    .map(({ newBlog, author, country, reads, text, url }) => {
      const snippet = text.split(' ');
      // console.log(snippet);

      return `
  <article class="blog-card">
       <div class="blog-info">
             <h4><span>My Trip to ${country}</span></h4>
             <p>By ${author} ${newBlog ? '<span>new</span>' : ''} </p>
             <p>
               ${truncate(snippet, 13)}
             </p>
        </div>
        <div class="blog-img-container">
          <img
            class="blog-card-img"
            src="${url}"
            alt=""
          />
          <div class="blog-info-div">
            ${reads} <br />
            Reads
          </div>
       </div>
    </article>`;
    })
    .join(' ');

  reviewsContainer.innerHTML = travelReviews
    .map(({ name, reviewText, url }) => {
      return `
      <article class="review-card">
      <div class="review-img-container">
        <img
          class="review-img"
          src="${url}"
          alt=""
        />
        <p class="review-name">Written By: ${name}</p>
      </div>
      <div class="review-text-container">
        <p class="review-text" >
          ${reviewText}
        </p>
        <div class="star-container">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </article>
      `;
    })
    .join(' ');

  footerLinksContainer.innerHTML = footerLinks
    .map(({ linkText }) => {
      return `
      <li class="footer-list-item"><a href="#">${linkText}</a></li>
      `;
    })
    .join(' ');

  socialLinksContainer.innerHTML = socialLinks
    .map(({ classes }) => {
      return `
      <li><a href="#"> <i class="${classes}"></i> </a></li>
      `;
    })
    .join(' ');

  mobileLinksUl.innerHTML = mobileLinks
    .map(({ linkText }) => {
      return `
      <li><a class="nav-link" href="#">${linkText}</a></li>
      `;
    })
    .join(' ');

  // prettier-ignore
  mainNavUl.innerHTML = mainNavLinks.map(({linkText}) => {
    return `
      <li><a class="main-nav-link" href="#">${linkText}</a></li>
      `;
  }).join(' ');
}

nextBtn.addEventListener('click', () => {
  const containerWidth = productContainer.getBoundingClientRect().width;
  productContainer.scrollLeft += containerWidth;
  console.log(containerWidth);
});

// background image and dynamic numbering ./img/pic${i}
prevBtn.addEventListener('click', () => {
  const containerWidth = productContainer.getBoundingClientRect().width;
  productContainer.scrollLeft -= containerWidth;
  console.log(containerWidth);
});

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});

document.addEventListener('DOMContentLoaded', display);
