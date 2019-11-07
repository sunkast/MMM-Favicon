# MMM-Favicon
Make any icon the favicon for MagicMirror

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````
Clone this repository:
````
git clone https://github.com/sunkast/MMM-Favicon.git
````
Configure the module in your config.js file.

## Using the module

To use this module, add it to the modules array in the config/config.js file:
````javascript
  {
    module: "MMM-Favicon",
    position: "top_left",
    config: { 
      icon: "icon.png"
    }
  }
````

## Configuration options

The following properties can be configured:

|Option|Default|Description|
|---|---|---|
|`icon`|`"icon.png"`|The name of the icon file you have placed in the module folder.|
