//Luhn formülü, kredi kartı numaraları, sosyal güvenlik numaraları, IMEI numaraları ve diğerleri gibi çeşitli kimlik numaralarının onaylanmasında kullanılan basit bir sağlama toplamı formülüdür. Algoritma, sayıyı sayının içerdiği bir kontrol basamağına, genellikle son basamağa göre doğrular.

function isValidCreditCardNumber(cardNumber) {
    // Kredi kartı numarasını ters çevirip her bir rakamı diziye aktar
    var cardNumberArray = cardNumber.split('').reverse().map(Number);
  
    // Çift basamakları 2 ile çarp ve 10'dan büyükse basamakları topla, değilse kendisiyle topla
    var sum = cardNumberArray.reduce(function (acc, digit, index) {
      if (index % 2 === 1) {
        var doubled = digit * 2;
        return acc + (doubled > 9 ? doubled - 9 : doubled);
      } else {
        return acc + digit;
      }
    }, 0);
  
    // Toplamın 10'a bölümünden kalanın 0 olması gerekiyor
    return sum % 10 === 0;
  }
  
  // Kullanıcıdan kredi kartı numarasını al
  var cardNumber = prompt('Kredi kartı numarasını girin:');
  
  // Kredi kartı numarasını doğrula
  if (isValidCreditCardNumber(cardNumber)) {
    alert('Girdiğiniz kredi kartı numarası geçerli.');
  } else {
    alert('Girdiğiniz kredi kartı numarası geçersiz.');
  }
  