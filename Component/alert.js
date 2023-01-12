function alarm() {
  alert(
    "Terima kasih sudah mendaftar di Portal Pendaftaran Vaksin Online kami!"
  );
  localStorage.clear();
  window.scrollTo(0,0);
  window.location.reload();
}

export default alarm;
