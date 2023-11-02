import _ from "lodash";

console.log("Hello from hello.js");

const mahasiswa = [
  {
    nama: "Test 1",
    email: "test1@gmail.com",
    jurusan: "test 1",
  },
  {
    nama: "Test 2",
    email: "test2@gmail.com",
    jurusan: "test 2",
  },
  {
    nama: "Test 3",
    email: "test3@gmail.com",
    jurusan: "test 3",
  },
];

const mhs = _.find(mahasiswa, { nama: "Test 3" });

console.log(mhs);
