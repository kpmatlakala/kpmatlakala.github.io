# Frontend Mentor - Product Preview Card Component Solution

This is a solution to the [Product Preview Card Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Screenshot

![Screenshot](../../assets/previews/responsive-designs/product-card-preview.jpg)

### Links

- [GitHub](https://github.com/DeLightPlus/DeLightPlus.github.io/tree/main/public/frontend-mentor-challenges/responsive_designs/product-preview-card-component)
- [Live Site](https://delightplus.github.io/frontend-mentor-challenges/responsive_designs/product-preview-card-component/index.html)
- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/product-preview-card-component-with-html-and-css-_27T-Genie)

## Built With

- React
- HTML
- CSS

## Feedback

- **Marzia Jalili:**
  > Looking clean and neat — amazing work! 🎉 A tiny pro tip? Instead of using two <img> elements and then toggling them using css, you could use the <picture> element, buddy. The <picture> element is super handy cuz it lets you show different images depending on the screen size or device. Example: <picture> <source srcset="images/image-product-desktop.jpg" media="(min-width: 768px)"> <img src="images/image-product-mobile.jpg" alt="A beautiful perfume"> </picture> This ensures to display the image put in the <source> as long as the page is larger than 768px otherwise it goes to the default path set in the img, which will be for mobile. Hope my feedback brings you peace. 😌😁😅
- **Hansel:**
  > For the images, you could use the <picture> HTML element and supply the two images, it'll detect which one to use based on the screen size you specified for each image. I know this isn't part of where you want feedback in but I also noticed it seems like you prioritized the desktop-first approach over a mobile-first approach, not that this is anything bad, it's just generally recommended to use that.

## Author

- GitHub: [DeLightPlus](https://github.com/DeLightPlus)
- Frontend Mentor: [@DeLightPlus](https://www.frontendmentor.io/profile/DeLightPlus)
- LinkedIn: [Kabelo Matlakala](https://www.linkedin.com/in/kabelo-matlakala/)

## Acknowledgments

Thanks to the Frontend Mentor community for inspiration and feedback!
