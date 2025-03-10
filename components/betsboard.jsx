"use client";
import "@/styles/betsboard.css";
import { IconLink } from "@/components/icons";

export default function Betsboard({ betsboardData }) {
  const itemsTable = betsboardData.map((item, index) => (
    <tr key={`${item.player}${index}`} className="RatioRegular">
      <td>
        <button
          type="button"
          tabIndex={index}
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white max-w-full"
          aria-label="Open Bet Preview"
          data-button-root=""
        >
          <IconLink
            IconComponent={item.gameIcon}
            className="svg-icon svg-green"
          />
          <span className="truncate">{item.game}</span>
        </button>
      </td>
      <td>
        <div className="hoverable next-bbyuql">
          <div className="flex gap-1 items-center w-full">
            <span className="truncate">
              <span className="weight-semibold line-height-default is-inline align-left size-default text-size-default variant-subtle with-icon-space next-17v69ua">
                <span>{item.player}</span>
              </span>
            </span>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.time}</td>
      <td className="hidden md:table-cell right-align next-1crq6f6">
        <div className="currency next-141qgpc" role="presentation">
          <span className="content next-141qgpc">
            <span
              className="weight-normal line-height-default align-left size-default text-size-default variant-subtle numeric with-icon-space is-truncate next-17v69ua"
              style={{ maxWidth: "12ch" }}
            >
              {item.bet}
            </span>
          </span>
          <span
            className="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate next-17v69ua"
            title="betIcon"
            style={{ maxWidth: "12ch" }}
          >
            <IconLink IconComponent={item.betIcon} className="svg-icon" />
          </span>
        </div>
      </td>
      <td className="hidden md:table-cell right-align next-1crq6f6">
        <span className="weight-normal line-height-default align-left size-default text-size-default variant-subtle numeric with-icon-space next-17v69ua">
          {item.multiplier}
        </span>
      </td>
      <td className="right-align next-1crq6f6">
        <div className="currency next-141qgpc" role="presentation">
          <span className="content next-141qgpc">
            <span
              className="weight-normal line-height-default align-left size-default text-size-default variant-success numeric with-icon-space is-truncate next-17v69ua"
              style={{ maxWidth: "12ch" }}
            >
              {item.pay}
            </span>
          </span>
          <span
            className="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate next-17v69ua"
            title="payIcon"
            style={{ maxWidth: "12ch" }}
          >
            <IconLink IconComponent={item.payIcon} className="svg-icon" />
          </span>
        </div>
      </td>
    </tr>
  ));

  return (
    <div
      data-nosnippet="true"
      data-layout="true"
      data-analytics="bets-board"
      className="stack x-stretch y-center gap-smaller padding-none direction-vertical padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi"
      style={{ width: "100%" }}
    >
      <div className="tabs next-nasyl7" data-content="">
        <div className="stack x-space-between y-center gap-small padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto stretch next-1cd1boi">
          <div className="tabs-wrapper scrollX next-1vkrcyy">
            <div className="slider variant-dark next-1vkrcyy">
              <div className="content-wrapper h-8 next-1vkrcyy">
                <button
                  type="button"
                  tabIndex="0"
                  className="opacity-50 inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.9375rem] px-[1.25rem] rounded-full chromatic-ignore"
                  data-test="my-bets-tab"
                  data-testid="my-bets-tab"
                  aria-label="My Bets"
                  data-analytics="bets-board-my-bets-button"
                  disabled=""
                  data-button-root=""
                >
                  <span>My Bets</span>
                </button>{" "}
                <button
                  type="button"
                  tabIndex="0"
                  className="active inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.9375rem] px-[1.25rem] rounded-full"
                  data-test="all-bets-tab"
                  data-testid="all-bets-tab"
                  aria-label="All Bets"
                  data-analytics="bets-board-all-bets-button"
                  data-button-root=""
                >
                  <span className="chromatic-ignore">All Bets</span>
                </button>{" "}
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.9375rem] px-[1.25rem] rounded-full !bg-grey-400 !text-white [&amp;_svg]:!text-white"
                  aria-label="High Rollers"
                  data-testid="high-rollers-bets-tab"
                  data-test="high-rollers-bets-tab"
                  data-analytics="bets-board-high-rollers-button"
                  data-button-root=""
                >
                  <span className="chromatic-ignore">High Rollers</span>
                </button>{" "}
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.9375rem] px-[1.25rem] rounded-full"
                  data-analytics="bets-board-races-button"
                  data-button-root=""
                >
                  <span className="chromatic-ignore">Race Leaderboard </span>{" "}
                  <div className="bubble-wrap next-nasyl7">
                    <div className="scale-up next-tgp09d"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="select-wrap next-nasyl7">
            {" "}
            <label className="stacked next-1wzq4lo">
              {" "}
              <div className="select-wrap next-16bm4r1">
                <div className="select-content next-16bm4r1">
                  <select className="select spacing-expanded next-16bm4r1">
                    <option value="10">10 </option>
                    <option value="20">20 </option>
                    <option value="30">30 </option>
                    <option value="40">40 </option>
                  </select>{" "}
                  <div className="dropdown-icon-wrap next-16bm4r1">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 64 64"
                      className="svg-icon "
                    >
                      {" "}
                      <title></title>{" "}
                      <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                    </svg>
                  </div>
                </div>
              </div>{" "}
            </label>
          </div>
        </div>
      </div>{" "}
      <div data-content="">
        <div className="table-wrapper scrollX next-1lzsrn5">
          <table className="table-content next-1lzsrn5 is-fixed stripey animate slideDownOdd">
            <thead slot="thead" className="next-1bkhvw3">
              <tr>
                <th>
                  <span className="chromatic-ignore header-resize next-1bkhvw3">
                    Game
                  </span>
                </th>
                <th className="chromatic-ignore">User</th>
                <th className="chromatic-ignore hidden md:table-cell">Time</th>
                <th className="right-align chromatic-ignore next-1bkhvw3 hidden md:table-cell">
                  Bet Amount
                </th>
                <th className="right-align chromatic-ignore next-1bkhvw3 hidden md:table-cell">
                  Multiplier
                </th>
                <th className="right-align chromatic-ignore next-1bkhvw3">
                  Payout
                </th>
              </tr>
            </thead>
            <tbody data-bets-loading="false" className="next-1lzsrn5">
              {itemsTable}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
