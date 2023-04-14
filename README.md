# Luhn-Algoritmasi
Luhn Algoritma Nedir?

[Alıntı]

Luhn formülü, kredi kartı numaraları, sosyal güvenlik numaraları, IMEI numaraları ve diğerleri gibi çeşitli kimlik numaralarının onaylanmasında kullanılan basit bir sağlama toplamı formülüdür. Algoritma, sayıyı sayının içerdiği bir kontrol basamağına, genellikle son basamağa göre doğrular.

**************



1) 16 Haneli bir kredi kartı numarasında ilk hanenin indisi 0 ve son hanenin indisi 15 olmak üzere algoritmayı aşağıdaki gibi alabiliriz:
Çift indisli hanelerin iki katını al. Çıkan sonucun basamaklarını topla ve bir değişkende tut (ciftToplam)

2) Tek indisli hanelerin toplamını bir başka değişkende tut (tekToplam) Not: (değişkende ismi verirken Pascal Case yöntemini kullanıyorum.)

3) (ciftToplam+tekToplam) işleminin sonucundaki sayı eğer 10 ile tam bölünebiliyorsa,girilen numara doğrudur.



