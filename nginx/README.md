# Serve MVTs from disk using Nginx

## Usage

Move `your_tile_directory` to the this Nginx folder

Build the image

   docker build -t nginxtiles .

Run the image as a background process. Make sure no other services are running at `your_port_number` specify below:

   docker run -v $(pwd):/var/www/html -p your_port_number:80 -d nginxtiles

No we can get the MVT tiles from the following path:

   http://localhost:your_port_number/your_tile_directory/z/x/y.pbf
