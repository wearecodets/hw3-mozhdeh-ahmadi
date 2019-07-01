# 💳 Payment Form Exercise (Part 2) 

> :clock9:&nbsp; &nbsp; **Due:** Saturday, July 13 @ 9 am
>
> :mag_right:&nbsp; &nbsp; **Code Review:** Thursday, July 11 
>
> Still unclear about requesting a PR review? [See the course info](https://github.com/wearecodets/phase-two/blob/master/week-zero/about.md#homework-pull-request).

## Objective

After completing this assignment, you should have five branches: `master`, `feature-accordion` and three other bug fixing branches. You need to open four PRs for code reviews.

**Do not modify `index.html`, `index.js` or `.scss` files in `src/stylesheets`. Your code should only be in `src/main.js`.**

If it's your first time working on this project, run `npm install`. Otherwise, just `npm start` to begin working.

## Branching Rules

1. Never work directly on the `master` branch. 
2. `origin/master` always represents the latest code deployed to production (Netlify).
2. Create a new branch for each homework topic:
    - Prefix your branch with `feature-` to work on new features. For example, `feature-accordion`.
    - Prefix your branch with `fix-` to work on bug fixes. For example, `fix-paypal`.

## Directions

### 1. Deploy to Production 

Connect this Github repo's `master` branch to Netlify and customize the domain URL to have the same name as this homework repo – for example: `http://hw3-niko.netlify.com`. From now on, every merged PR will trigger a deployment to this URL. When you are done, [add a status badge](https://www.netlify.com/docs/continuous-deployment/#status-badges) below this line:

### 2. Implement Toast Notification Feature 

### 3. Implement the Checkout Feature

Last week the boss complained that the Pay button was unclickable, and you have pushed a fix to make it clickable.  But, this did not make him happy and he wants instead a success fail checkout confirmation.

Since the boss is hard to predict, your co-workers thought it would be better to build a small example of what the checkout experience would be. Here is what they told you to build:

after the pay button is clicked, add a faint form overlay with a loading spinner, make it spins for 3 seconds then add a success class with a thank you message. Put the product carousel in there.

- After the pay button is clicked, toggle a full screen modal with a loader.
- Using [`setTimeout()`](https://www.w3schools.com/jsref/met_win_settimeout.asp), simulate a slow 3-second network request. The loader will continue animating at this point.
- Display the success/failure screen after three seconds.
    - In case of success, print a thank you message with the first name of the user.
    - In case of failure, print a message with the user's email address.
- When the user closes the modal dialog, alternate the checkout outcome between success and failure, so the next time the pay button is clicked, the opposite result will happen.

Again, they have done the non-JS part in a separate branch called `feature-checkout`, and all you need to do is code the JS.

