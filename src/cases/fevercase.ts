import type { Item } from "../types";
import { feverCaseKnifes } from "./knifes";
import { classified, covert, millspec, restricted } from "./util";

export const FeverCase: Item[] = [
  ...feverCaseKnifes,
  covert(
    "AWP | Printstream",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OK8Yap5M-SBC2ad_uJ_t-l9AX_qlk4k5GyAzo6ocC-QZgZxX8AjEbZY5xnrxtPjM7vnsgGIj9oTmXngznQeg3pfcPs/360fx360f"
  ),
  covert(
    "FAMAS | Bad Trip",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1d7v-ve5tvIfSHHG6A_uJ_t-l9AX6xzExytWndzdj6eCrGb1MkWZB2TOBc4xK8mtHkZezrsQOPjoITyi_gznQezHhrR0c/360fx360f"
  ),
  classified(
    "AK-47 | Searing Rage",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRbbx9LP-AB3GV_uJ_t-l9AXu2lk1xsD-EnI3_JHmeaAV1CZB1RbEJtxfuxNHuMuq251PY3o4UxXjgznQeg4Qz-rg/360fx360f"
  ),
  classified(
    "Glock-18 | Shinobu",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5t-KPmdAWWF_uJ_t-l9AX6ylh5w4mTcwtahdS2VOgRzWJsjEOQL5EWxwNblZeK2tVPXitlDmyvgznQeC7fvQL8/360fx360f"
  ),
  classified(
    "UMP-45 | K.O. Factory",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtiLPSsDWaC1eF5vt5lRi67gVN2tWXTzI6tc3rGPQ4kWJUiQrJf4RPskIW2ZO3r4VaKi9hFyX-qhy0a8G81tA_18T9p/360fx360f"
  ),
  restricted(
    "Nova | Rising Sun",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwixU-fOReq1-Kf6UMXSFz9F6ueZhW2eyzB9z4WjTzt77JXKVaQcnC5sjTLEMthDpwdzkMr_lsVbW34lGmyj5kGoXuV-iSbwM/360fx360f"
  ),
  restricted(
    "Desert Eagle | Serpent Strike",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH-OdD2yV_v53pPVsXSeMmRQguynLzdmsIHOVPVciXMN3QuVeuxexmtHuP77m7gDd34kRxXj_3ChKvS9p5fFCD_SJMmxOXA/360fx360f"
  ),
  restricted(
    "P90 | Wave Breaker",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf7XsL0PChZ7d5H_KfG2KvzedxuPUnTHrlzU9xt2qHzd-rJ3yQb1cmXJNzF-Vc5BS6wdLjMe60tAyP3dhNzTK-0H3NvEQllg/360fx360f"
  ),
  restricted(
    "Zeus x27 | Tosai",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1B6ue9V7BiM_GaMWuZxuZi_uM6GXC3xUh05D7WmY36IHuUZ1AjXpVwR-FZu0OxltHlN-_gsQ3Z34NbjXKpEIQyv90/360fx360f"
  ),
  restricted(
    "Galil AR | Control",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PWvZK1hH_OcAHOCzuJJo_V7RiK2qhEutDWR1Nmvcn6RPFVxW5txTbRZuxDuxNKzZu2x7wCMiNpExCSshyof7Xlt5-scEf1y6paUA5M/360fx360f"
  ),
  millspec(
    "USP-S | PC-GRN",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViS0_titedmXSq2qho1tjiLpYPwJiPTcFcoCpV2F-Nc4xXpwNPhZeLg5AffiIxNynj2jylP53xp6ugHU6Ig__XJz1aWMWkGKhU/360fx360f"
  ),
  millspec(
    "M4A4 | Choppa",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRb7ZoJf6sDWadztF6ueZhW2fjl05-6mzVmdmgcHOTZgIhXpJ1RO5c4Bjql9DjMunhsgOL34gUnnr-kGoXuTonsfJ3/360fx360f"
  ),
  millspec(
    "SSG 08 | Memorial",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJtvMuWHD2uZ0vpJvOhuRz39x0UlsWmEnt37IHyfaFAkWZR5RuALtRKxlYKxMLnn4leL3t5FmSv9ijQJsHj6GwByAQ/360fx360f"
  ),
  millspec(
    "MP9 | Nexus",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f8DIC0PyrcLF-H_yaCW-Ej7ohs7Q5FnDqx0t152XdzI36cCnDaAZyDJNzRuVYsBa4kYHgZbyx4ALAy9USEWUfUe0/360fx360f"
  ),
  millspec(
    "XM1014 | Mockingbird",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk9___OPU5H_2cDWyZz-l0ufNtcCW6khUz_T-AnNagJH3FbwQnCsEmTeEMs0aww9biMby3tleKjtkQmSX-2yMfv311o7FVNa3OfdQ/360fx360f"
  ),
  millspec(
    "P2000 | Sure Grip",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0OL8Y5trMvGQGmac_uJ_t-l9AS2wwxx06mTUw9b7JH2RZlQoDZYkRLQD5hW4lNPiYePktgzWj45CmSzgznQeV1pFuQ0/360fx360f"
  ),
  millspec(
    "MAG-7 | Resupply",
    "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wi9a6KWRaalgL8-RAX-vzedxuPUnTHjgkxwj52SHyImqcX2fO1AhDMNxEe4I4RWwkIXgMO60sQPeiYgQmTK-0H2GsAjMqQ/360fx360f"
  ),
];
