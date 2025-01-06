module.exports = {
  plugins: [
    require('tailwindcss'), // Menambahkan Tailwind CSS
    require('autoprefixer'), // Menambahkan Autoprefixer untuk kompatibilitas browser
    require('cssnano')({
      // Menambahkan Cssnano untuk meminifikasi CSS
      preset: 'default', // Menggunakan preset default untuk optimisasi
    }),
  ],
};
