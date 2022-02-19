<template>
    <div class="header-container">
        <div class="footer-content">
            <div class="footer-left">
                <div class="footer-logo">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOC40MjMgNi42NTZ2MTQuMDU2czEyLjUyOCAyLjU4NSAxMi41MjgtNy4wMjZjMC0xMC4wMzUtMTIuNTI4LTcuMDMtMTIuNTI4LTcuMDN6bTMuMjQ1IDExLjYxNVY5LjE3M3M2LjAwNC0xLjI1NiA2LjAwNCA0LjUyNmMwIDUuMTg3LTYuMDA0IDQuNTcyLTYuMDA0IDQuNTcyek01OC4xNSA5LjYyNGMtMy4wMDMgMC01LjIxIDIuNTUtNS4yMSA1LjcgMCAzLjE1IDIuMjA3IDUuNzAyIDUuMjEgNS43MDIgMy4wMDUgMCA1LjE4LTIuNTUxIDUuMTgtNS43MDEgMC0zLjE1LTIuMTc1LTUuNzAxLTUuMTgtNS43MDF6bS0uMDA4IDguODNjLTEuNzgzIDAtMi4xNzItMS44MTctMi4xNzItMy4xMyAwLTEuMzExLjIwNy0zLjA4NSAyLjE3Mi0zLjA4NSAxLjkyNyAwIDIuMTYgMS43NyAyLjE2IDMuMDg2IDAgMS4zMTItLjM5IDMuMTI4LTIuMTYgMy4xMjh6TTY1LjkzOCAxMC4zNTh2MTAuMjk4aDIuOTIzVjEyLjM3czEuNzc1LS41MjYgMy4zNjguMjA4Yy40NjktMS43ODMuNTc1LTIuNDExLjU3NS0yLjQxMXMtMS40ODgtLjY0MS0zLjQzMS0uNTE0Yy0xLjk0NC4xMjctMy40MzYuNzA1LTMuNDM2LjcwNXpNNzkuMzYxIDkuNjI0Yy0zLjIyLS4yNzYtNC42OTguNTgxLTQuNjk4LjU4MWwuMjc5IDIuMzFzMS44NTUtLjc2IDMuODQ1LS4zODdjMS4zOS4yNjMgMS4yODggMS45NTcgMS4yODggMS45NTdoLTIuNjgzYy0uODI4IDAtMS42NTIuMTg3LTIuMzY2LjYwNy0uNzg2LjQ2My0xLjQ0NSAxLjE3Ni0xLjUwOCAyLjUyMi0uMTIzIDIuNTg1IDEuNDQ1IDMuMzU4IDIuNDg5IDMuNTgzIDEuMzEzIDAgMy43MTguMDQ2IDQuODM3IDBhNS4zMDMgNS4zMDMgMCAwMDEuOTMxLS40ODh2LTcuOTU2cy0uMTk0LTIuNDU0LTMuNDE0LTIuNzN6bS43MTQgOC45MDJoLTIuNTk0cy0xLjAyNy0uMDk4LTEuMDI3LTEuMTIxYzAtLjkwOS41OTItMS4zMjkgMS4xNS0xLjMyOWgyLjQ3MXYyLjQ1ek0xMDUuODI4IDkuNjI0Yy0zLjIyLS4yNzYtNC42OTguNTgxLTQuNjk4LjU4MWwuMjc4IDIuMzFzMS44NTUtLjc2IDMuODQ1LS4zODdjMS4zOTEuMjYzIDEuMjg5IDEuOTU3IDEuMjg5IDEuOTU3aC0yLjY4M2MtLjgyOCAwLTEuNjUyLjE4Ny0yLjM2Ni42MDctLjc4Ni40NjMtMS40NDUgMS4xNzYtMS41MDggMi41MjItLjEyMyAyLjU4NSAxLjQ0NSAzLjM1OCAyLjQ4OCAzLjU4MyAxLjMxNCAwIDMuNzE4LjA0NiA0LjgzOCAwIDEuMDQ0LS4wNDMgMS45MzEtLjQ4OCAxLjkzMS0uNDg4di03Ljk1NmMtLjAwNCAwLS4xOTQtMi40NTQtMy40MTQtMi43M3ptLjcxNCA4LjkwMmgtMi41OTRzLTEuMDI3LS4wOTgtMS4wMjctMS4xMjFjMC0uOTA5LjU5Mi0xLjMyOSAxLjE0OS0xLjMyOWgyLjQ3MnYyLjQ1ek05NC40MTEgNi4zOTd2NS42OTNoLTUuMzQ5VjYuMzk3aC0zLjIzNnYxNC4xODdoMy4yMzZ2LTUuNjk3aDUuMzV2NS42OTdoMy4yMzZWNi4zOTdIOTQuNDF6TTEyMC4xOTggMTAuMjQ3bC0uNiAyLjI1NXMtNC45MDUtMS40NjUtNC44NTUgMi44MThjLjA1MSA0LjI4NCAzLjg2MiAzLjI5IDUuMDM3IDIuNjg4LjI2MiAxLjc1Ny40MTggMi40MzYuNDE4IDIuNDM2cy0yLjQ1NS44Ny00LjU5My4zN2MtMi4xNDItLjUwMS00LjIyOS0yLjA5OC00LjA3My01LjYyNS4xNTYtMy41MjggMi41NjEtNC43MTIgMy43MDYtNS4yMDkgMS45MzUtLjgzMiA0Ljk2LjI2NyA0Ljk2LjI2N3pNMTIyLjM5MSA1LjMybDMuMTA1LS40NzJ2OC45MTVsMy40OTktMy44OGgzLjM5M2wtNC4xNzUgNC43NDZzMy42IDQuMTc3IDQuMzYxIDUuOTU2Yy0xLjAxOS0uMDMtMy41MjQgMC0zLjUyNCAwcy0xLjA5NS0yLjYzMi0zLjQ5OS00LjUwNXY0LjUwNWgtMy4wNTVsLS4xMDUtMTUuMjY2ek0xNDEuNTczIDEwLjIyMmwtLjYgMi4yMDNzLTMuNzk0LTEuMDk1LTQuMDczLjI4OWMtLjIwNyAxLjA0OCAyLjA3OSAxLjU2NiAyLjYzNyAxLjgzNCAxLjQ4Ny43MDkgMi40NjMgMS40NjkgMi40NjMgMy4wOTQgMCAxLjYyNi0uNzM5IDMuMzMzLTQuNDQ1IDMuMzMzLTMuNzA1IDAtMy45NDItLjc2LTMuOTQyLS43NmwuNi0yLjM2czEuNDIuOTU1IDMuODM3LjY3NWMxLjQ4Ny0uMTc0IDEuMDAxLTEuMzMtLjI0Ni0xLjgyNi0xLjI0Ni0uNDk3LTQuNDk1LTEuMTcxLTMuNjQ2LTQuMzggMS4xNTQtNC4zMyA3LjQxNS0yLjEwMiA3LjQxNS0yLjEwMnoiIGZpbGw9IiMwNjAwMDEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjM4NCA5LjI5MmM4LjE4OS0yLjc1IDE1LjUwNy0yLjE5OSAxNi4zNDggMS4yMzYuODQgMy40MzgtNS4xMTcgOC40NTItMTMuMzA1IDExLjIwN0M4LjIzOCAyNC40ODUuOTE2IDIzLjkzNC4wNzkgMjAuNDk1Yy0uODQtMy40MzQgNS4xMTctOC40NTIgMTMuMzA1LTExLjIwM3oiIGZpbGw9InVybCgjcHJlZml4X19wYWludDBfbGluZWFyXzg4XzIwOCkiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNzMzLjAzNGMuODUzLS4zMjcgMy4zNzEgMS44IDQuODg4IDIuODU3IDEuNDAzLS40ODQgMy41NjItMS4wMTUgNS40Ni0uNzEzIDEuMDM0LjE2NSAxLjk1Ni40NSAyLjY2NS44MzIuNzk5LS41NDggNS4xMTctMy44ODkgNS40LTIuNzM4LjIxMi44NzguMTg2IDEuNzMyLjA2NCAyLjU2LS4yMjkgMS41MjMtLjYyMiAzLjA5LTEuMDE5IDQuNjQ0LS4xOTQuNzY4LS41NjIgMS41MS0uNjMzIDIuMjAzLS4xMSAxLjA0OC4yNDkgMi4xNzMuNTA3IDMuMDk0LjI2MS45MjYuMzk3IDEuOTIgMS4wMTggMi41NiAzLjM4IDIuNjI4IDYuMzU5IDYuNDEgNi45ODQgOC4yNzguMjYyLjc4Ni4xMzEgMS40MS0uMzggMS44NDctLjg1OC43MzQtMi4wNS42MDctMi45ODMtLjA2LS41OTYtLjQyOC0xLjM5NS0xLjI4Mi0yLjAzMi0xLjk2NWExOS45OTQgMTkuOTk0IDAgMDAtMS41MjYtMS40M2MtLjI3LS4yMjYtLjM5My0uMjU1LS41NjYtLjI4LS4yODMtLjAzOS0uODUuMTgyLTEuMjcyLjI5Ni0xLjExNS4zMDItMi40NzYuNTMxLTMuNzUyLjY5Ny40ODYuNTkgMS41MjYgMS40MjIgMi4xNiAyLjE0My4zNjMuNDE2Ljg3NCAxLjAyOC44ODcgMS43ODguMDEyLjY0NS0uNzI3IDEuNTctMi42NjcgMS4zMDctLjU0NC0uMDcyLTIuNC0uODc0LTIuNzI5LTEuMDc0LTcuOTA1LTQuNjk1LTguMjQtOS4yMTItOS4xNDMtMTYuODUzQzMuODE5IDcuOTIgMi44NTkgNS4yNzIgMi40NzkgMi45NWMtLjE1Ni0uOTc2LS41MjQtMi41OS4yNTQtMi45MTZ6IiBmaWxsPSIjMDYwMDAxIi8+PHBhdGggZD0iTTE3LjE2MiA4LjMyNWMtLjQwMi4wNDYtLjcyNy43NzItMS4xODcgMS4xMDctLjY4LjQ5Ny0xLjY4Ni4zMDYtMS42MzEtLjA4LjA1LS4zODYuMjctLjQxNi44NjItLjUwNS41OTEtLjA5IDEuNjE0LS41NTYgMS4yOTctMi4yNDItLjI4LTEuNDczLTEuOTM1LTEuMTQyLTEuOTM1LTEuMTQycy0uMjk2LS41NDctMS4wMjctLjYwM2MtLjcyMy0uMDU1LTEuMzIzLjg4My0xLjMyMy44ODNzLS40NzMuMjktLjcwMS0uMzA1Yy0uMTE0LS4yOTctLjcyNy0uNzY0LTEuMzUyLS41MDUtLjYzNC4yNjMtMS4xODcuOS0xLjAzMSAxLjU4Ny4xNTYuNjguODU4Ljk0NyAxLjM0My45MTMuNDg2LS4wMzQuNzk1LjIzLjc1My40NTgtLjA3Mi4zNjYtMS4wNTMuNjI5LTEuOTk5LjA4NS0uNTQtLjMxLS43NzMtMS4xNzEtLjc1Ni0xLjM1OGwuMDM0LS40MzdzLTEuNTEzIDAtMS44NjQgMS4yNzdDNi4zIDguNzM2IDcuMTcgOS4zNiA3LjY5IDkuMzFjLjM0Ni0uMDM0LjA4NC0uNTEzLjUwMy0uOTA4LjExOC0uMTEuNDYtLjE4My42MTcuMDI1LjE1Ni4yMDguMDk3LjQ2My0uMTQ4LjYwMy0uMjQ1LjE0LS40MjcuNzczLjI2NiAxLjE3Mi4zMTIuMTc4LS4xNjUgMS4xMjUtLjcxOC40MDMtLjMyNi0uNDItLjI5Mi0uNjA3LS42MzgtLjU2OS0uMzQ3LjAzNC0uNzY1LS4zMDEtLjgzNy0uMzUyLS4wNjgtLjA1MS0uNDczLjE2NS0uMzE3LjYzNy4xNTYuNDcuMTM1IDEuMSAxLjcyIDEuMTU0LjMzLjAxNy40NC4wNzMuNTA3LjMzNnMuODU3IDEuNDY0IDIuMDI0LjgyYzEuMTY2LS42NDYuNDYtMS42Ni0uMDQ3LTEuODEtLjMyMS0uMDkzLS41MDctLjUwOS0uMjY2LS43Ni4xMy0uMTM1LjI2Ni0uMDg0LjYxMy4wNTYuOTkyLjQwOCAxLjQ1MyAxLjY1MS44MDcgMi4xNy0uMjcuMjE2LjI3OC41NzcuNzMuNjQuNDUzLjA2OCAyLjE5OC0uMTEgMi4zODgtMS4wODcuMDg0LS40MjguMDMtLjY5Ni4wNDItLjkzOC4wMTctLjQ1LjY3Mi0uNTA1LjY4OS0uMjA4LjAxNy4yOTctLjAwOS4zNjUuMTMuNDkzLjM4MS4zNDQgMS40LS4wOTggMS42OTUtLjc4MS4zMDgtLjY4OC4yMjQtMi4xNDQtLjI4Ny0yLjA4em0tNC41MyAxLjkxYy0uMTgxIDAtLjQyMi0uMjYzLS4yOTEtLjQxMi4zLS4zMzEuMzQ2LS44MDIuMzI1LTEuMDkxLS4wMy0uMzg2LS4yNTMtLjUzNS0uMjY2LS43Ni0uMDA4LS4xOTUuMTQtLjMxOC4zMTctLjM3OC4zODQtLjEyMy42NzIuNzUyLjY0MiAxLjUwMy0uMDE3LjYwMy0uMzEzIDEuMTM4LS43MjcgMS4xMzh6bS40MS00LjQ0NWMuMTM1LS4zNTYuMzYtLjMyMi40NTItLjMxNC4wOTMuMDA0LjM1MS4xMDIuMzM4LjM0IDAgMC0uMTQuNzIxLjE0Ljk0Ni40MjIuMzQ0Ljk4LjIgMS4xMTEuMi4xODItLjAwNC4zOTcuNDI0LjA5My42MjQtLjMwNC4yLTEuMjEzLjI3Ni0xLjY5OS0uMjE3LS41Mi0uNTE4LS41NjItMS4yNDMtLjQzNS0xLjU3OXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0RGNkYyOCIgc3Ryb2tlLXdpZHRoPSIuMjEyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQwX2xpbmVhcl84OF8yMDgiIHgxPSI4LjY0MyIgeTE9IjkuMjIyIiB4Mj0iMjEuMjI3IiB5Mj0iMjEuNzQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0RDNjMxRSIvPjxzdG9wIG9mZnNldD0iLjk4IiBzdG9wLWNvbG9yPSIjRkNGNUYwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+" alt="">
                </div>
                <div class="footer-info">
                    Explore the world of innovation at HackerLink, BUILD, continuous funding, grant, bounty, and hackahons.
                </div>
            </div>
            <div class="link-list">
                <div>
                    <div class="link-title">About us</div>
                    <div>Blog</div>
                    <div>Terms</div>
                    <div>Privacy</div>
                    <div>Announcements</div>
                    <div>News</div>
                    <div>Jobs</div>
                </div>
                <div>
                    <div class="link-title">Products</div>
                    <div>BUIDL</div>
                    <div>Grant</div>
                    <div>Continuous Funding</div>
                    <div>Hackathon</div>
                    <div>Bounty</div>
                    <div>Dora Factory</div>
                    <div>DAOrayaki</div>
                    <div>DoraID</div>
                </div>
                <div>
                    <div class="link-title">Communities</div>
                    <div>Twitter</div>
                    <div>YouTube/B站</div>
                    <div>Discord</div>
                    <div>Telegram</div>
                    <div>Facebook</div>
                    <div>LinkedIn</div>
                    <div>DoraHacks公众号</div>
                    <div>微信</div>
                    <div>Medium</div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="rights">2020 © All Rights Reserved. DoraHacks</div>
            <div class="privacy">
                <a href="javascript:void(0)">Privacy policy</a>
                <a href="javascript:void(0)">CA notice</a>
                <a href="javascript:void(0)">Community guidelines</a>
                <a href="javascript:void(0)">Terms of service</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 160px;
}
.footer-left {
    width: 445px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 165px;
}
.footer-left .footer-logo {
    width: 316px;
    height: 58px;
}
.footer-left .footer-logo img {
    width: 100%;
    display: block;
}
.footer-left .footer-info {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

    color: rgba(14, 14, 17, 0.5);
}
.link-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 637px;
}

.link-list div {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;

    color: #0E0E11;
}
.link-list div>div {
    margin-top: 15px;
}
.link-list div>div.link-title {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */


    color: #0E0E11;
}
.footer-bottom {
    background: rgba(225, 225, 225, 0.1);
    display: flex;
    width: 100%;
    height: 49px;
    justify-content: space-between;
    align-items: center;
    margin-top: 94px;
}
.footer-bottom .rights {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */


    color: rgba(14, 14, 17, 0.3);
    margin-left: 63px;
}
.footer-bottom  .privacy {
    margin-right: 62px;
}
.footer-bottom  .privacy a{
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    text-decoration-line: underline;

    color: rgba(14, 14, 17, 0.3);
    margin-left: 40px;
}

@media screen and (max-width: 960px) {
    .footer-left {
        margin-right: 15px;
    }
    .link-list {
        width: 400px;
    }
    .footer-bottom .privacy {
        display: none;
    }
    .footer-bottom {
        justify-content: center;
    }
}

@media screen and (max-width: 750px) {
  .link-list{
    display: none;
  }
  .footer-left {
      margin: 0;
      justify-content: center;
      align-items: center;
  }
  .footer-bottom .rights {
    margin: 0 auto;
  }
  .footer-info {
      padding: 15px;
  }
}
</style>