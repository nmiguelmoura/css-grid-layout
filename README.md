# CSS Grid Layout (v0.1.1)
This is a 12 columns responsive CSS Grid layout to be used in simple web projects.

## Features
- Number of columns:12
- Breakpoints: 768px, 1024px and 1200px
- Max-width:1366px
- Two types of grid, when dealinh with small devices, one that makes all columns 100% and other that allows the user to select column width.

## Demonstration
Clone repository to your sistem and run index.html in your browser to get a demonstration of the grid-system in action.

## Installation
Clone repository to your system and include the path to `css/index-grid-style.css` in your html headers.

## How to use (option 1)
Option 1:
On extra-small devices, all columns match 100% width. After 768px, column width is multiple of 100/12.
```
	<div class="main" role="main">
        <div class="wrapper">
            <div class="row">
                <div class="col-span-1-12">1</div>
                <div class="col-span-1-12">2</div>
                <div class="col-span-1-12">3</div>
                <div class="col-span-1-12">4</div>
                <div class="col-span-1-12">5</div>
                <div class="col-span-1-12">6</div>
                <div class="col-span-1-12">7</div>
                <div class="col-span-1-12">8</div>
                <div class="col-span-1-12">9</div>
                <div class="col-span-1-12">10</div>
                <div class="col-span-1-12">11</div>
                <div class="col-span-1-12">12</div>
            </div>
            <div class="row">
                <div class="col-span-8-12">8</div>
                <div class="col-span-4-12">4</div>
            </div>
        </div>
    </div>
```

## How to use (option 2):
Specify different column numbers for different viewports: extra-small (xs), small (sm) and medium (md).
```
	<div class="wrapper">
         <div class="row">
			<article class="xs-4-12 sm-6-12 md-3-12 lg-6-12">4</article>
			<article class="xs-4-12 sm-6-12 md-3-12 lg-3-12">4</article>
			<article class="xs-4-12 sm-6-12 md-3-12 lg-3-12">4</article>
		</div>
	</div>
```

## How to contribute
Spotted a bug or need a new feature? Please, create a new issue and explain what you need or what the problem is. Contributions are always welcome.
You can also fork the repository and clone it to your system, and then make a pull request after your commits.
