"use client";
import {
  Ada,
  Bitcoin,
  Dai,
  Doge,
  Etherium,
  Lite,
  Matic,
  Ripple,
  Shiba,
  Solana,
  Tether,
  Tron,
  Usdc,
  Dot,
  Discord,
  Instagram,
  Telegram,
  Twitter,
  Youtube,
  Logo,
  Response,
  Eighteen,
} from "@/components/icons";

export default function Footer() {
  return (
    <footer id="site-footer" className="relative z-0 RatioRegular">
      <div className="bg-[#192032] p-5 md:py-[30px] md:px-10 font-medium w-full">
        <div className="max-w-footer mx-auto">
          <div className="flex flex-col divide-y-[2px] divide-grey lg:justify-center">
            <div className="flex flex-col sm:flex-row w-full g-mb-md">
              <div className="flex flex-row sm:w-1/2">
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-col items-center sm:items-start lg:w-[400px] hidden lg:block">
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active block sm:hidden"
                  >
                    <Logo className="w-[162px] active:scale-95"/>
                  </a>
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active hidden lg:block"
                  >
                    <Logo className="w-[180px] active:scale-95"/>
                  </a>
                  <div className="hidden sm:block lg:hidden w-16">
                    <a
                      aria-current="page"
                      href="/"
                      className="router-link-active router-link-exact-active"
                    >
                      <i className="GIcon-logo text-green-color active:scale-95 block"></i>
                    </a>
                  </div>
                  <p className="leading-4 lg:leading-[24px] text-slate-color text-left text-[12px] md:text-[14px] lg:mt-[7px] font-semibold">
                    At Gambi, were committed to providing a thrilling and safe
                    gambling experience. Enjoy our vast array of casino games
                    and sports events, all backed by a steadfast commitment to
                    security and transparency. Get ready for a seamless online
                    casino journey, and always remember to gamble responsibly.
                  </p>
                </div>
                <div className="w-1/2 lg:flex lg:justify-center lg:py-5">
                  <div className="flex flex-col items-start gap-2 md:gap-4 text-sm text-slate-color min-w-[93px]">
                    <span className="text-base text-white mb-[8px] md:mb-2">
                      Support
                    </span>
                    <a
                      href="/provably-fair/overview"
                      className="cursor-pointer hover:text-white text-sm duration-150 flex gap-[5px] group font-semibold"
                    >
                      Fairness
                    </a>
                    <button className="text-sm hover:text-white text-steel-color duration-150 font-semibold">
                      Live Support
                    </button>

                    <a
                      href="https://help.gambi.com/en/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-pointer hover:text-white text-sm duration-150 flex gap-[5px] group font-semibold"
                    >
                      Help Center
                      <div className="w-4 h-4">
                        <i className="GIcon-external-link text-sm text-steel-color group-hover:text-white"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.begambleaware.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-pointer hover:text-white text-sm duration-150 flex gap-[5px] group font-semibold"
                    >
                      Gamble Aware
                      <div className="w-4 h-4">
                        <i className="GIcon-external-link text-sm text-steel-color group-hover:text-white"></i>
                      </div>
                    </a>

                    <button className="text-sm hover:text-white text-steel-color duration-150 font-semibold">
                      Statistics
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 text-sm items-start text-slate-color min-w-[136px] g-text-base w-1/2 lg:hidden">
                  <span className="text-white mb-[8px] md:mb-2 text-base">
                    About
                  </span>

                  <a
                    href="/policies/terms"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/policies/privacy"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/policies/aml"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    AML Policy
                  </a>
                  <a
                    href="/policies/license"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Licenses
                  </a>
                  <a
                    href="/policies/sportsbook"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Sports Rules
                  </a>
                </div>
              </div>
              <div className="flex-row hidden lg:flex lg:gap-[30px] lg:justify-between lg:w-1/2">
                <div className="flex flex-col gap-2 md:gap-4 text-sm items-start text-slate-color min-w-[136px] g-text-base py-5">
                  <span className="text-white mb-[8px] md:mb-2 text-base">
                    About
                  </span>

                  <a
                    href="/policies/terms"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/policies/privacy"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/policies/aml"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    AML Policy
                  </a>
                  <a
                    href="/policies/license"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Licenses
                  </a>
                  <a
                    href="/policies/sportsbook"
                    className="cursor-pointer hover:text-white text-sm duration-150 font-semibold"
                  >
                    Sports Rules
                  </a>
                </div>
                <div className="flex flex-col max-w-[360px] gap-[30px] lg:py-5">
                  <div className="flex flex-col gap-4">
                    <span className="text-base text-white">
                      Accepted Currencies
                    </span>
                    <div className="flex flex-row flex-wrap gap-4">
                      <Bitcoin className="w-[21px] h-[21px] active:scale-95" />
                      <Etherium className="w-[21px] h-[21px] active:scale-95" />
                      <Lite className="w-[21px] h-[21px] active:scale-95" />
                      <Tether className="w-[21px] h-[21px] active:scale-95" />
                      <Usdc className="w-[21px] h-[21px] active:scale-95" />
                      <Ripple className="w-[21px] h-[21px] active:scale-95" />
                      <Solana className="w-[21px] h-[21px] active:scale-95" />
                      <Tron className="w-[21px] h-[21px] active:scale-95" />
                      <Doge className="w-[21px] h-[21px] active:scale-95" />
                      <Shiba className="w-[21px] h-[21px] active:scale-95" />
                      <Matic className="w-[21px] h-[21px] active:scale-95" />
                      <Dot className="w-[21px] h-[21px] active:scale-95" />
                      <Ada className="w-[21px] h-[21px] active:scale-95" />
                      <Dai className="w-[21px] h-[21px] active:scale-95" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span className="text-base text-white">Follow Us</span>
                    <div className="flex flex-row flex-wrap items-center gap-5 lg:gap-[30px]">
                      <a
                        href="https://twitter.com/gambi"
                        rel="noopener noreferrer"
                        target="blank"
                        className="flex"
                      >
                        <Twitter className="svg-icon-2xl" />
                      </a>
                      <a
                        href="https://t.me/gambicom"
                        rel="noopener noreferrer"
                        target="blank"
                        className="flex"
                      >
                        <Telegram className="svg-icon-2xl" />
                      </a>
                      <a
                        href="https://discord.gg/theprimates"
                        rel="noopener noreferrer"
                        target="blank"
                        className="flex"
                      >
                        <Discord className="svg-icon-2xl" />
                      </a>
                      <a
                        href="https://www.instagram.com/gambi"
                        rel="noopener noreferrer"
                        target="blank"
                        className="flex"
                      >
                        <Instagram className="svg-icon-2xl" />
                      </a>
                      <a
                        href="https://www.twitch.tv/gambidotcom"
                        rel="noopener noreferrer"
                        target="blank"
                        className="flex"
                      >
                        <Youtube className="svg-icon-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:w-1/2 max-w-[380px] mt-5 sm:mt-0 gap-[30px] lg:hidden">
                <div className="flex flex-col gap-4">
                  <span className="text-base text-white">
                    Accepted Currencies
                  </span>
                  <div className="flex flex-row flex-wrap gap-4">
                    <Bitcoin className="w-[21px] h-[21px] active:scale-95" />
                    <Etherium className="w-[21px] h-[21px] active:scale-95" />
                    <Lite className="w-[21px] h-[21px] active:scale-95" />
                    <Tether className="w-[21px] h-[21px] active:scale-95" />
                    <Usdc className="w-[21px] h-[21px] active:scale-95" />
                    <Ripple className="w-[21px] h-[21px] active:scale-95" />
                    <Solana className="w-[21px] h-[21px] active:scale-95" />
                    <Tron className="w-[21px] h-[21px] active:scale-95" />
                    <Doge className="w-[21px] h-[21px] active:scale-95" />
                    <Shiba className="w-[21px] h-[21px] active:scale-95" />
                    <Matic className="w-[21px] h-[21px] active:scale-95" />
                    <Dot className="w-[21px] h-[21px] active:scale-95" />
                    <Ada className="w-[21px] h-[21px] active:scale-95" />
                    <Dai className="w-[21px] h-[21px] active:scale-95" />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="text-base text-white">Follow Us</span>
                  <div className="flex flex-row flex-wrap items-center gap-5 lg:gap-[30px]">
                    <a
                      href="https://twitter.com/gambi"
                      rel="noopener noreferrer"
                      target="blank"
                      className="flex"
                    >
                      <Twitter className="svg-icon-2xl" />
                    </a>
                    <a
                      href="https://www.instagram.com/gambi"
                      rel="noopener noreferrer"
                      target="blank"
                      className="flex"
                    >
                      <Telegram className="svg-icon-2xl" />
                    </a>
                    <a
                      href="https://www.twitch.tv/gambidotcom"
                      rel="noopener noreferrer"
                      target="blank"
                      className="flex"
                    >
                      <Discord className="svg-icon-2xl" />
                    </a>
                    <a
                      href="https://www.youtube.com/@gambiCasinoTV"
                      rel="noopener noreferrer"
                      target="blank"
                      className="flex"
                    >
                      <Instagram className="svg-icon-2xl" />
                    </a>
                    <a
                      href="https://kick.com/gambicasino"
                      rel="noopener noreferrer"
                      target="blank"
                      className="flex"
                    >
                      <Youtube className="svg-icon-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden md:py-[30px] py-5 mt-4">
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col items-center sm:items-start lg:w-[400px]">
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active block sm:hidden"
                >
                  <Logo className="w-[162px] active:scale-95"/>
                </a>
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active hidden lg:block"
                >
                  <Logo className="w-[180px] active:scale-95"/>
                </a>
                <div className="hidden sm:block lg:hidden w-16">
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active"
                  >
                    <i className="GIcon-logo text-green-color active:scale-95 block"></i>
                  </a>
                </div>
                <p className="leading-4 lg:leading-[24px] text-slate-color text-left text-[12px] md:text-[14px] lg:mt-[7px] font-semibold">
                  At Gambi, were committed to providing a thrilling and safe
                  gambling experience. Enjoy our vast array of casino games and
                  sports events, all backed by a steadfast commitment to
                  security and transparency. Get ready for a seamless online
                  casino journey, and always remember to gamble responsibly.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center lg:py-9 lg:px-10 lg:leading-[24px] px-0 text-xs md:text-sm flex-col py-[25px] sm:flex-row">
              <div className="flex gap-4 items-center sm:w-1/2">
                <a
                  href="https://gambi.com/license"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block w-8 h-8 flex-none"
                >
                  <img
                    alt="loading..."
                    src="https://imagedelivery.net/ud0nKgC6_aGi3aA3QSI9OA/license/license-icon.png/license"
                    className="w-8 h-8"
                  />
                </a>
                <p className="text-slate-color font-semibold">
                  Gambi is owned and operated by Gambi Gaming N.V., Registration
                  number: 162205 | Registered address: Zuikertuintjeweg Z/N
                  (Zuikertuin Tower). For inquiries, email us at
                  support@gambi.com .
                </p>
              </div>
              <div className="hidden md:flex justify-between flex-row-reverse md:flex-row sm:justify-end mt-5 sm:mt-0 gap-5 w-full sm:w-1/2">
                <a href="https://www.begambleaware.org" target="_blank">
                  <Response className="!w-[138px] svg-disable"/>
                </a>
                <Eighteen className="!w-[47px] svg-disable"/>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center divide-x-[1px] divide-[#858DA0] pt-5 md:pt-[30px] text-xs md:text-sm">
              <div className="flex flex-row pr-2">
                <span className="text-steel-color">Support -&nbsp; </span>
                <span className="text-white">support@gambi.com</span>
              </div>
              <div className="flex flex-row px-2">
                <span className="text-steel-color">Press -&nbsp; </span>
                <span className="text-white">press@gambi.com</span>
              </div>
              <div className="flex flex-row pl-2">
                <span className="text-steel-color">Partnerships -&nbsp; </span>
                <span className="text-white">partner@gambi.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
