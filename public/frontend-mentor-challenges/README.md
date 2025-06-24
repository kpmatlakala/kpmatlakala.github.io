



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
    }



}