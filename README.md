CSS Grid Layout (v0.1.1)
=============

A 12 columns responsive CSS Grid layout to be used in simple web projects.

Number of columns:12

Breakpoints:768px and 1024px

Max-width:1200px

### Usage ###
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

Option 2:
Specify different column numbers for different viewports: extra-small (xs), small (sm) and medium (md).
```
	<div class="wrapper">
         <div class="row">
			<article class="xs-4-12 sm-6-12 md-3-12">4</article>
			<article class="xs-4-12 sm-6-12 md-3-12">4</article>
			<article class="xs-4-12 sm-6-12 md-3-12">4</article>
		</div>
	</div>
```
