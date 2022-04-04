create database merchant_services;

use merchant_services;

DROP DATABASE try; 

ALTER TABLE `merchant_info` 
CHANGE COLUMN `join_date` `join_date` DATETIME NOT NULL ;

ALTER TABLE `merchant_info` 
CHANGE COLUMN `phone_number` `phone_number` varchar(255) NOT NULL ;

ALTER TABLE `merchant_services`.`product_info` 
ADD COLUMN `merchant_id` INT NOT NULL AFTER `name`;

# buat foreign key
ALTER TABLE `merchant_services`.`product_info` 
ADD CONSTRAINT `fk_merchant`
  FOREIGN KEY (`merchant_id`)
  REFERENCES `merchant_services`.`merchant_info` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
 
# untuk drop foreign key
ALTER TABLE `merchant_services`.`product_info` 
DROP FOREIGN KEY `fk_merchant`;

INSERT INTO `merchant_info` 
(`id`, `password`, `address`, `join_date`, `phone_number`) 
VALUES ('1', '12345', 'jl.jalan', '2022-10-20 10:11:00', '085777777777');

truncate table merchant_info;

truncate table product_info;