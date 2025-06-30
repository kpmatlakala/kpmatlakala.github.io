



Feedbacks
{
    MarziaJalili(social-links-profile){ 
        "Awesome work!
        DRY code? Here you have it!

        You could use grid for centering the card due to its simplicity:
            display: grid;
            place-items: center;

        Other than that, the code's pretty neat! 🔥😎" 
    },
    
    Honey001(Recipe page){
        Nice code, but can you make the recipe title not to wrap on mobile view.
    },

    Mohammad Irfan(Four card feature section){
        Hey, just a heads up — the image path you used is wrong. You don’t need to include the full project folder name like ../four-card-feature-section/.

        Since your index.html is already in the root, fix it like this: 
            <img src="images/icons/icon-karma.svg" alt="Karma Icon">

        instead of this: 
            <img src="../four-card-feature-section/images/icon-karma.svg" alt="Karma Icon">

        That will fix the issue and show the icon properly.
    },
    Alaa Mekibes(Four card feature section){
        Well done 🎉

        Correct your img path by deleting this part ../four-card-feature-section/. Start directly images/<image name>.

        Use css variables to improved maintainability like this:

        :root { --bg-color: hsl(100, 46%, 95%); }
        body { background-color: var(--bg-color); }

        Update Your README File
        Start by using the provided README template included in the starter file. Customize it to enhance clarity and professionalism.
    },

    Marzia Jalili(Product preview card component){
        Looking clean and neat — amazing work! 🎉

        🌟 A tiny pro tip?

        ✅ Instead of using two <img> elements and then toggling them using css, you could use the <picture> element, buddy.

        ✅ The <picture> element is super handy cuz it lets you show different images depending on the screen size or device.

        ✅ Let's break it down with this example:

        <picture>
            <source srcset="images/image-product-desktop.jpg" media="(min-width: 768px)">
            <img src="images/image-product-mobile.jpg alt="A beautiful perfume">
        </picture>
        ✅ This ensure to display the image put in the <source> as long as the page is larger than 768px otherwise it goes to the default path set in the img, which will be for mobile.

        Hope my feedback brings you peace.

        😌😁😅
    },
    Hansel(Product preview card component){
        For the images, you could use the <picture> HTML element and supply the two images, it'll detect which one to use based on the screen size you specified for each image. I know this isn't part of where you want feedback in but I also noticed it seems like you prioritized the desktop-first approach over a mobile-first approach, not that this is anything bad, it's just generally recommended to use that.
    },

    Elmar Chavez(testimonials-grid-section){
        1. "I would love some feedback on my use of CSS Grid—specifically whether there are best practices or more efficient ways to achieve the layout I’ve built."

        Yes there is Kabelo! Try using grid-area property in your grids so that it will be easier to code complex grid layouts like this challenge. You could do something like this:
        .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
            "card1  card1   card2   card5"
            "card3  card4   card4   card5";
        }

        .card:nth-child(1) {
        grid-area: card1;
        }

        .card:nth-child(2) {
        grid-area: card2;
        }

        .card:nth-child(3) {
        grid-area: card3;
        }

        .card:nth-child(4) {
        grid-area: card4;
        }

        .card:nth-child(5) {
        grid-area: card5;
        }
        This technique is much more scalable than manually adding spans for each grid items.

        I also noticed that some of your cards appear too tall at breakpoints 768px up to 1025px so you might as well check up on that.

        2. "I’m also curious about accessibility improvements: are there any semantic or ARIA roles I could add to make this more accessible?"

        For each card container you can add aria-labelledby and aria-describedby attributes which greatly improves accessibility for screen readers. There are other ARIA attributes I used in my solution if you want to take a look.

        Also, to check your site accessibility, you can use Google Lighthouse in the Chrome dev tools. You can see my performance report for this challenge here as an example.

        3. "Lastly, if there are any suggestions for making the text or card components even more visually appealing across various screen sizes, I’d love to hear them."

        I can't help but notice that some of your margins are off compared to the intended design so I recommend first using PerfectPixel which can help you compare the design image to your live site. This helped a lot even without a Figma file.

        I've also noted that you use CSS variables which is good practice. You can upgrade your site by adding a media query for dark themes like this example below:

        @media (prefers-color-scheme: dark) {
        :root {
            --BGCOLOR: #121212;
            --FONT-COLOR: hsl(0, 0%, 90%);
            /* AND OTHER CODES */
        }
        }
        I love that you have an organized CSS code and I believe you can improve it much more. Keep on practicing! I hope my feedback helps.
    }




}