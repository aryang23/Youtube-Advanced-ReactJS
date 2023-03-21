import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-8 shadow-lg w-72">
      <ul>
        <Link to="/">
          <li className="h-11 w-48 p-2 rounded-lg text-center hover:bg-gray-300 flex">
            <img
              className="w-6 h-6"
              alt="user"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            />
            <span className="ml-3 text-center mt-[1px]">Home</span>
          </li>
        </Link>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,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"
          />
          <span className="ml-3 text-center mt-[1px]">Shorts</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC"
          />
          <span className="ml-3 text-center mt-[1px] mb-1">Subscriptions</span>
        </li>
        <li className="text-gray-200">-----------------------------</li>
      </ul>
      <h1 className="h-11 w-36 p-2 text-center font-bold">Subscriptions</h1>
      <ul>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,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"
          />
          <span className="ml-3 text-center mt-[1px]">Library</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,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"
          />
          <span className="ml-3 text-center mt-[1px]">History</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX///8AAABqamre3t76+vqpqan39/ejo6Pb29t0dHQtLS26urq9vb3i4uKUlJTKysoYGBg0NDSHh4dOTk6zs7Pr6+s/Pz+dnZ18fHzS0tJvb28KCgphYWEmJiZGRkZWVlYfHx+DFmIHAAAFIklEQVRoge1a6ZazKhBUEzRuuK9xe/+n/FABIRNHUHTOPdf6lU0rQnf1QmvajRs3bty48b/Gk8A06Uv1LGb2eAVuCqyigDAuS9uujabvkyTPI8dp22FoW8eJ8jxJ+r4xatsuyxjCorBA6gavR2ZK8lWuVRpN4ujKEPVNHQO32lgdHyTqOH8iAf4q9cMOz6QeEdavr9RPeDbzjPiLHfjdNdzIBH48fHUV9QiP5w5Wfzg4UZf0jBcVlgVAmrqeFwRVFQSe56YpABZyx8Uf+6SLnGH1pinLnbHfRL0dQwCQn/p+ZpqjkPzuI98MaBQg08x8H+kEsGBZ95zvVsxvl/12YJVJUwn9nayCEaUJF6sD9EMoKUlyMK03JaKfkY+G6rdLVcCnD0/W18Lv23MWnMMzx2Tx/N4kO/44nxuxEeOan5S4eHkFt6YVmG529hi/Wxd9pSCPbkzv8C5013BrmoHlZHSs15tdhgtA1HR0LRe72UWrjuTUWTS2vHjVNa2fGWuNbnl8HTlOHCLk9Th7ca8j97C+P7UM29v39OYUvGbGd0ZfXWZvSODp81ac2l0CYu4V8bpcOJY+M//gHzWxjQfEzRNR8qB/6055iN5MiI2n84te8EL8cx0eKc56ojKAlflNMMlesZ8cqzsgHl+LXRYv5Hq4WxowOSS3Ewzmhs4iCfaR20RUSyl15cnRbu3SJvrANlmCXeToDjvyXbzVNrmdtZd8T7ptESNPiOXJkPNV/Fvwn1NgD0tIRE23L2HIgV9z9K1cGoTFItdwFi/oNtRDkdJx9L1MvYFVNdKwyAv+9YUchWW+bWOIx0Uc0B2tnV8IeixLztZ4E4QNHwezVgsPkFOnIRA0fEweajiwC27ZJ7mWxRx7C0QCDs4h3ppcFvWDHCVFvO9HAo9BsicNXyNYJH4hR6vIu/227T7wL1WQI/N9s+ybmYZa8qXGH7EpeKrJ2VC/mZioJn+6S1NpMzdQTM7Z3KZUKyXnvW07C1dI7tsstR5ua7wy8qzkqIXyMUXkGeQ8XBerJij5EXk1wUdUFbwLldcDgcXNOWrxRJoGlt0h9UPRZTIpGlKHfeTVB7VgDsiRD/vSKMiH0UGybqNp1K4EkkMIZQtmmkDuSp1ZlPINFZo67yoaFjR7ijVaNDTzi33lUrLvdAAH/4YUioImw8l4t7NCXgpFuRKZOQLLpbyLAy2R5ZoDZJf01jpwFEQfWK4topkzu7R3ccBVJpRsCCFURQwOHoBRnUyJ5V0IvHepdBNQAZYmoHT7UwE5bX/+aeP3T1vef9js9+kxx2UnW+wxBwnogl1AFcCiGmnU40V73gqQkLhCg+t15p4NRGOWQ+S98VEaeMsnEzcjWXU/CLzq+dQ6IlHyIo0jhxVzECfLcODcQgakdTdvM1G77UaOCpAHJ8GEdFOiCxaeWBjVFXpk1J6uscuoCn3QpYManxpfnoAO3C2p+rOl7GEDXrKTi2LEWVUs40kO881LZzF0jR0XeDJrGs2SHc6ax7LGuazHNJcV23UfsRRcI8TV1zG0bZQnfVPXdlmWcQznwTQAUtcLPDcFYJwOHefRYBzjAdEkj9rhvXrLj7J0fSDuBPwI3385hoj2qTh99nPCymFIBqPta48hNNbrWjOA+bqZHEb3y9AtXn4/SIvS6JXNG7dJY5QQeJWsfCBXfbyqwEun6c5xtnOc7rTrBnlTNw5bR1HedcgPpynryRXhNB+aekH18E8LFk8GZ3HcuHHjxo0b/xn8A6gZRHmVYIFCAAAAAElFTkSuQmCC"
          />
          <span className="ml-3 text-center mt-[1px]">Your Videos</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAY1BMVEX///8AAAD8/PxVVVVERETw8PAlJSWTk5OwsLDn5+ft7e1oaGj19fUrKytzc3OioqIdHR0QEBDDw8PNzc3f399QUFCCgoJKSkp7e3u8vLwwMDDU1NQ4ODhcXFyqqqqcnJyKiop76gTnAAAE80lEQVR4nO1b2XajMAylpAmYNRDIApmS///KCW2akQzGkgit5xzuQx96jHNta7Mke96KFStWrFhBhB+p9hDmXXBHl4eHSkX+b9BQ4S0+Nfvi7Yli35ziW6h+lI4Kz+mbEek5VD9Cw68+6sLM47FB9Ue79OYkZbaz8fjCLiuTBYmo/Erj8YVrvtRBRcGEgIwjDaIFiPg5m8gnmfzVMuNfRER6NJeXklGZVWnMKLIXikxI1BoTduGLiGzj6UXvd2m6209vW7x9BZO2Ni52kwV3z1NVSt3/HMIg2xglqm7nMwnHl5vGeTsiAqrN43E6xexDCka3Iy4ro1r4qoxHZSuYx+Q4NmdX2T6rurG9PM4gMiawpwvt28tp+K1ceLfnwWR1SPZxSTiU97OUy3BPApazTYaCFsuYDOQkZltNNViNSF70JRUSx+bnuvwK9CjUprgKbVSrhzhs+9Jqq4nFgUekHVLBXNNWk/7jDB+y1YSu5s2lrWSmodTEjqVGmqB085h4XicWF4V9yMw96YH3ZUe2Cn6G5WQ+E91IZVS7cEHaM+04/G9Y5sTurCA6Mh8FHNdpLT5u/nwis7mECNmXlLYtOeJvsQLfSv9u1VBsqXIKkyjlfLIhU8FLTCkmEwl7bNtIBhUfiQtBLRXaFKvWMah4Cm2LXaHRNtqpc6jgDbdKS9KA0bU9UmJRSaBna2yTl5A4wUCzqGCHUk6PRYb2RAgfeVQSGHtbTG4FvQ/FJPKoeBcw/W76DvMBhhaUuZlUPGjnPiZHQrkihQZcKjBcqKcGKkDasn9CKlACiinTAiWcFmtxqaD4cEpD4XXQomtSKtBanM3DYHiQks6HT6WCv2FWZ+gkrI5QSAU5RbOwQFEhBRQCKsjJmYXlBkYRL058Ki34kZtpENw7gg8XUoFRiFEKIuAhNsSJ+VSen9xxMsVyCgQI2XJUgMdtTHvf7v8Nol7DBFRAALU3WYwSmH3qXVJABehpYbKjUJcPy1E5gJ8xrRhofEGztSIqFdh8k/UCDtx4iK+gAkTSFIgAeaJFCEIqIE4waQegQrVwEirQxi1BhRKSy6iwD6gIyKlUygHNEdv7ERFzJiSxnaPMPTJaQpWizBITh5OqAUV4KSZOYvi1rOqJEBFDw29ascQdbvVSgD3tTXGHkiDhfvR6daOzkKEECZLQyetrUA3m8n6YVGxK6CQJKD+hbpjLWzahgKSAUhJmP9BuMJd9Z9QlUpgtuXx8I8kxl/spGUbSLh+CKxn4WC96ZqMbi65kZgEXXFTh1+W7dkr5yE8RL6qC6ztCpBuZEYtHvL4Lkhoaqj8amVg/JWpSg5/q0eGHWneE1hZBTvXwE2BDKK1UiM+InADjpwXHgDpeNHmgpwXZydJRACPT4GNmJEvZKWQDnsVlvBxOCpmdWDfhYWQ2+Oc4iXV2ucGMqPdo2Przyg3cIswUVH3D/+AVYbilqUkkeOHc0hSzYMcAu2DHLGMywC9j8oq7dAiKu7ySNxmikjerEYAKWSOAS+0RDjWNuNRK41KDkUttVw41o7nUoudS46JL7ZwuNbm61PrrUEO051CbuCdqnq+WaZ536UnB1EOL9IcfWrj0/MRz6FGO59JTpVkPuNLXPuDyHHrW1mPrymO/Hs48gezhzMPQHtTnsmbP8FI48oj4AT9y42n1k46qyt9/cL5ixYoVK/5T/AWHkkTmy46lBAAAAABJRU5ErkJggg=="
          />
          <span className="ml-3 text-center mt-[1px]">Watch later</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="https://cdn.iconscout.com/icon/free/png-256/youtube-music-3889566-3222736.png"
          />
          <span className="ml-3 text-center mt-[1px]">Songs</span>
        </li>
        <li className="h-11 w-48 rounded-lg p-2 text-center hover:bg-gray-300 flex">
          <img
            className="w-6 h-6"
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXivZ9jcCKikw5MSXKwutHvvbBSctSrwsO-5cOGhoSzA&s"
          />
          <span className="ml-3 text-center mt-[1px]">Show More</span>
        </li>
        <li className="text-gray-200">-----------------------------</li>
      </ul>
      <h1 className="font-bold pt-5 p-2 h-11 w-36 p-2 text-center mb-1">
        Watch Later
      </h1>
      <ul>
        <li className="h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Music
        </li>
        <li className="h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Sports
        </li>
        <li className="h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Gaming
        </li>
        <li className="h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Movies
        </li>
        <li className="p-2 h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Sports
        </li>
        <li className="p-2 h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Gaming
        </li>
        <li className="p-2 h-11 w-36 p-2 text-center hover:bg-gray-300 cursor-pointer">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
