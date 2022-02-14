<template>
    <div class="header-container">
        <div class="header">
            <div class="left-nav">
                <div class="nav-logo ">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOC40MjMgNi42NTZ2MTQuMDU2czEyLjUyOCAyLjU4NSAxMi41MjgtNy4wMjZjMC0xMC4wMzUtMTIuNTI4LTcuMDMtMTIuNTI4LTcuMDN6bTMuMjQ1IDExLjYxNVY5LjE3M3M2LjAwNC0xLjI1NiA2LjAwNCA0LjUyNmMwIDUuMTg3LTYuMDA0IDQuNTcyLTYuMDA0IDQuNTcyek01OC4xNSA5LjYyNGMtMy4wMDMgMC01LjIxIDIuNTUtNS4yMSA1LjcgMCAzLjE1IDIuMjA3IDUuNzAyIDUuMjEgNS43MDIgMy4wMDUgMCA1LjE4LTIuNTUxIDUuMTgtNS43MDEgMC0zLjE1LTIuMTc1LTUuNzAxLTUuMTgtNS43MDF6bS0uMDA4IDguODNjLTEuNzgzIDAtMi4xNzItMS44MTctMi4xNzItMy4xMyAwLTEuMzExLjIwNy0zLjA4NSAyLjE3Mi0zLjA4NSAxLjkyNyAwIDIuMTYgMS43NyAyLjE2IDMuMDg2IDAgMS4zMTItLjM5IDMuMTI4LTIuMTYgMy4xMjh6TTY1LjkzOCAxMC4zNTh2MTAuMjk4aDIuOTIzVjEyLjM3czEuNzc1LS41MjYgMy4zNjguMjA4Yy40NjktMS43ODMuNTc1LTIuNDExLjU3NS0yLjQxMXMtMS40ODgtLjY0MS0zLjQzMS0uNTE0Yy0xLjk0NC4xMjctMy40MzYuNzA1LTMuNDM2LjcwNXpNNzkuMzYxIDkuNjI0Yy0zLjIyLS4yNzYtNC42OTguNTgxLTQuNjk4LjU4MWwuMjc5IDIuMzFzMS44NTUtLjc2IDMuODQ1LS4zODdjMS4zOS4yNjMgMS4yODggMS45NTcgMS4yODggMS45NTdoLTIuNjgzYy0uODI4IDAtMS42NTIuMTg3LTIuMzY2LjYwNy0uNzg2LjQ2My0xLjQ0NSAxLjE3Ni0xLjUwOCAyLjUyMi0uMTIzIDIuNTg1IDEuNDQ1IDMuMzU4IDIuNDg5IDMuNTgzIDEuMzEzIDAgMy43MTguMDQ2IDQuODM3IDBhNS4zMDMgNS4zMDMgMCAwMDEuOTMxLS40ODh2LTcuOTU2cy0uMTk0LTIuNDU0LTMuNDE0LTIuNzN6bS43MTQgOC45MDJoLTIuNTk0cy0xLjAyNy0uMDk4LTEuMDI3LTEuMTIxYzAtLjkwOS41OTItMS4zMjkgMS4xNS0xLjMyOWgyLjQ3MXYyLjQ1ek0xMDUuODI4IDkuNjI0Yy0zLjIyLS4yNzYtNC42OTguNTgxLTQuNjk4LjU4MWwuMjc4IDIuMzFzMS44NTUtLjc2IDMuODQ1LS4zODdjMS4zOTEuMjYzIDEuMjg5IDEuOTU3IDEuMjg5IDEuOTU3aC0yLjY4M2MtLjgyOCAwLTEuNjUyLjE4Ny0yLjM2Ni42MDctLjc4Ni40NjMtMS40NDUgMS4xNzYtMS41MDggMi41MjItLjEyMyAyLjU4NSAxLjQ0NSAzLjM1OCAyLjQ4OCAzLjU4MyAxLjMxNCAwIDMuNzE4LjA0NiA0LjgzOCAwIDEuMDQ0LS4wNDMgMS45MzEtLjQ4OCAxLjkzMS0uNDg4di03Ljk1NmMtLjAwNCAwLS4xOTQtMi40NTQtMy40MTQtMi43M3ptLjcxNCA4LjkwMmgtMi41OTRzLTEuMDI3LS4wOTgtMS4wMjctMS4xMjFjMC0uOTA5LjU5Mi0xLjMyOSAxLjE0OS0xLjMyOWgyLjQ3MnYyLjQ1ek05NC40MTEgNi4zOTd2NS42OTNoLTUuMzQ5VjYuMzk3aC0zLjIzNnYxNC4xODdoMy4yMzZ2LTUuNjk3aDUuMzV2NS42OTdoMy4yMzZWNi4zOTdIOTQuNDF6TTEyMC4xOTggMTAuMjQ3bC0uNiAyLjI1NXMtNC45MDUtMS40NjUtNC44NTUgMi44MThjLjA1MSA0LjI4NCAzLjg2MiAzLjI5IDUuMDM3IDIuNjg4LjI2MiAxLjc1Ny40MTggMi40MzYuNDE4IDIuNDM2cy0yLjQ1NS44Ny00LjU5My4zN2MtMi4xNDItLjUwMS00LjIyOS0yLjA5OC00LjA3My01LjYyNS4xNTYtMy41MjggMi41NjEtNC43MTIgMy43MDYtNS4yMDkgMS45MzUtLjgzMiA0Ljk2LjI2NyA0Ljk2LjI2N3pNMTIyLjM5MSA1LjMybDMuMTA1LS40NzJ2OC45MTVsMy40OTktMy44OGgzLjM5M2wtNC4xNzUgNC43NDZzMy42IDQuMTc3IDQuMzYxIDUuOTU2Yy0xLjAxOS0uMDMtMy41MjQgMC0zLjUyNCAwcy0xLjA5NS0yLjYzMi0zLjQ5OS00LjUwNXY0LjUwNWgtMy4wNTVsLS4xMDUtMTUuMjY2ek0xNDEuNTczIDEwLjIyMmwtLjYgMi4yMDNzLTMuNzk0LTEuMDk1LTQuMDczLjI4OWMtLjIwNyAxLjA0OCAyLjA3OSAxLjU2NiAyLjYzNyAxLjgzNCAxLjQ4Ny43MDkgMi40NjMgMS40NjkgMi40NjMgMy4wOTQgMCAxLjYyNi0uNzM5IDMuMzMzLTQuNDQ1IDMuMzMzLTMuNzA1IDAtMy45NDItLjc2LTMuOTQyLS43NmwuNi0yLjM2czEuNDIuOTU1IDMuODM3LjY3NWMxLjQ4Ny0uMTc0IDEuMDAxLTEuMzMtLjI0Ni0xLjgyNi0xLjI0Ni0uNDk3LTQuNDk1LTEuMTcxLTMuNjQ2LTQuMzggMS4xNTQtNC4zMyA3LjQxNS0yLjEwMiA3LjQxNS0yLjEwMnoiIGZpbGw9IiMwNjAwMDEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjM4NCA5LjI5MmM4LjE4OS0yLjc1IDE1LjUwNy0yLjE5OSAxNi4zNDggMS4yMzYuODQgMy40MzgtNS4xMTcgOC40NTItMTMuMzA1IDExLjIwN0M4LjIzOCAyNC40ODUuOTE2IDIzLjkzNC4wNzkgMjAuNDk1Yy0uODQtMy40MzQgNS4xMTctOC40NTIgMTMuMzA1LTExLjIwM3oiIGZpbGw9InVybCgjcHJlZml4X19wYWludDBfbGluZWFyXzg4XzIwOCkiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNzMzLjAzNGMuODUzLS4zMjcgMy4zNzEgMS44IDQuODg4IDIuODU3IDEuNDAzLS40ODQgMy41NjItMS4wMTUgNS40Ni0uNzEzIDEuMDM0LjE2NSAxLjk1Ni40NSAyLjY2NS44MzIuNzk5LS41NDggNS4xMTctMy44ODkgNS40LTIuNzM4LjIxMi44NzguMTg2IDEuNzMyLjA2NCAyLjU2LS4yMjkgMS41MjMtLjYyMiAzLjA5LTEuMDE5IDQuNjQ0LS4xOTQuNzY4LS41NjIgMS41MS0uNjMzIDIuMjAzLS4xMSAxLjA0OC4yNDkgMi4xNzMuNTA3IDMuMDk0LjI2MS45MjYuMzk3IDEuOTIgMS4wMTggMi41NiAzLjM4IDIuNjI4IDYuMzU5IDYuNDEgNi45ODQgOC4yNzguMjYyLjc4Ni4xMzEgMS40MS0uMzggMS44NDctLjg1OC43MzQtMi4wNS42MDctMi45ODMtLjA2LS41OTYtLjQyOC0xLjM5NS0xLjI4Mi0yLjAzMi0xLjk2NWExOS45OTQgMTkuOTk0IDAgMDAtMS41MjYtMS40M2MtLjI3LS4yMjYtLjM5My0uMjU1LS41NjYtLjI4LS4yODMtLjAzOS0uODUuMTgyLTEuMjcyLjI5Ni0xLjExNS4zMDItMi40NzYuNTMxLTMuNzUyLjY5Ny40ODYuNTkgMS41MjYgMS40MjIgMi4xNiAyLjE0My4zNjMuNDE2Ljg3NCAxLjAyOC44ODcgMS43ODguMDEyLjY0NS0uNzI3IDEuNTctMi42NjcgMS4zMDctLjU0NC0uMDcyLTIuNC0uODc0LTIuNzI5LTEuMDc0LTcuOTA1LTQuNjk1LTguMjQtOS4yMTItOS4xNDMtMTYuODUzQzMuODE5IDcuOTIgMi44NTkgNS4yNzIgMi40NzkgMi45NWMtLjE1Ni0uOTc2LS41MjQtMi41OS4yNTQtMi45MTZ6IiBmaWxsPSIjMDYwMDAxIi8+PHBhdGggZD0iTTE3LjE2MiA4LjMyNWMtLjQwMi4wNDYtLjcyNy43NzItMS4xODcgMS4xMDctLjY4LjQ5Ny0xLjY4Ni4zMDYtMS42MzEtLjA4LjA1LS4zODYuMjctLjQxNi44NjItLjUwNS41OTEtLjA5IDEuNjE0LS41NTYgMS4yOTctMi4yNDItLjI4LTEuNDczLTEuOTM1LTEuMTQyLTEuOTM1LTEuMTQycy0uMjk2LS41NDctMS4wMjctLjYwM2MtLjcyMy0uMDU1LTEuMzIzLjg4My0xLjMyMy44ODNzLS40NzMuMjktLjcwMS0uMzA1Yy0uMTE0LS4yOTctLjcyNy0uNzY0LTEuMzUyLS41MDUtLjYzNC4yNjMtMS4xODcuOS0xLjAzMSAxLjU4Ny4xNTYuNjguODU4Ljk0NyAxLjM0My45MTMuNDg2LS4wMzQuNzk1LjIzLjc1My40NTgtLjA3Mi4zNjYtMS4wNTMuNjI5LTEuOTk5LjA4NS0uNTQtLjMxLS43NzMtMS4xNzEtLjc1Ni0xLjM1OGwuMDM0LS40MzdzLTEuNTEzIDAtMS44NjQgMS4yNzdDNi4zIDguNzM2IDcuMTcgOS4zNiA3LjY5IDkuMzFjLjM0Ni0uMDM0LjA4NC0uNTEzLjUwMy0uOTA4LjExOC0uMTEuNDYtLjE4My42MTcuMDI1LjE1Ni4yMDguMDk3LjQ2My0uMTQ4LjYwMy0uMjQ1LjE0LS40MjcuNzczLjI2NiAxLjE3Mi4zMTIuMTc4LS4xNjUgMS4xMjUtLjcxOC40MDMtLjMyNi0uNDItLjI5Mi0uNjA3LS42MzgtLjU2OS0uMzQ3LjAzNC0uNzY1LS4zMDEtLjgzNy0uMzUyLS4wNjgtLjA1MS0uNDczLjE2NS0uMzE3LjYzNy4xNTYuNDcuMTM1IDEuMSAxLjcyIDEuMTU0LjMzLjAxNy40NC4wNzMuNTA3LjMzNnMuODU3IDEuNDY0IDIuMDI0LjgyYzEuMTY2LS42NDYuNDYtMS42Ni0uMDQ3LTEuODEtLjMyMS0uMDkzLS41MDctLjUwOS0uMjY2LS43Ni4xMy0uMTM1LjI2Ni0uMDg0LjYxMy4wNTYuOTkyLjQwOCAxLjQ1MyAxLjY1MS44MDcgMi4xNy0uMjcuMjE2LjI3OC41NzcuNzMuNjQuNDUzLjA2OCAyLjE5OC0uMTEgMi4zODgtMS4wODcuMDg0LS40MjguMDMtLjY5Ni4wNDItLjkzOC4wMTctLjQ1LjY3Mi0uNTA1LjY4OS0uMjA4LjAxNy4yOTctLjAwOS4zNjUuMTMuNDkzLjM4MS4zNDQgMS40LS4wOTggMS42OTUtLjc4MS4zMDgtLjY4OC4yMjQtMi4xNDQtLjI4Ny0yLjA4em0tNC41MyAxLjkxYy0uMTgxIDAtLjQyMi0uMjYzLS4yOTEtLjQxMi4zLS4zMzEuMzQ2LS44MDIuMzI1LTEuMDkxLS4wMy0uMzg2LS4yNTMtLjUzNS0uMjY2LS43Ni0uMDA4LS4xOTUuMTQtLjMxOC4zMTctLjM3OC4zODQtLjEyMy42NzIuNzUyLjY0MiAxLjUwMy0uMDE3LjYwMy0uMzEzIDEuMTM4LS43MjcgMS4xMzh6bS40MS00LjQ0NWMuMTM1LS4zNTYuMzYtLjMyMi40NTItLjMxNC4wOTMuMDA0LjM1MS4xMDIuMzM4LjM0IDAgMC0uMTQuNzIxLjE0Ljk0Ni40MjIuMzQ0Ljk4LjIgMS4xMTEuMi4xODItLjAwNC4zOTcuNDI0LjA5My42MjQtLjMwNC4yLTEuMjEzLjI3Ni0xLjY5OS0uMjE3LS41Mi0uNTE4LS41NjItMS4yNDMtLjQzNS0xLjU3OXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0RGNkYyOCIgc3Ryb2tlLXdpZHRoPSIuMjEyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQwX2xpbmVhcl84OF8yMDgiIHgxPSI4LjY0MyIgeTE9IjkuMjIyIiB4Mj0iMjEuMjI3IiB5Mj0iMjEuNzQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0RDNjMxRSIvPjxzdG9wIG9mZnNldD0iLjk4IiBzdG9wLWNvbG9yPSIjRkNGNUYwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+" alt="">
                </div>
                <div class="nav-items">
                    <a href="javascript:void(0)">BUIDL</a>
                </div>
                <div class="nav-items">
                    <a href="javascript:void(0)">Grant</a>
                </div>
                <div class="nav-items">
                    <a href="javascript:void(0)">Bounty</a>
                </div>
                <div class="nav-items">
                    <a href="javascript:void(0)">CF</a>
                </div>
                <div class="nav-items">
                    <a href="javascript:void(0)">YouTube</a>
                </div>
            </div>
            <div class="right-features">
                <div class="login-button"><a href="javascript:void(0)">登录/注册</a></div>
                <div class="language-change">简体中文 <span></span> English</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 90px;
    height: 70px;
}
.left-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: Miriam Libre;
}
.nav-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
}
.nav-items {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    color: #0E0E11;
    margin-right: 32px;
}
.nav-logo img {
    width: 165px;
    height: 30px;
    display: block;
}
.right-features {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.login-button a{
    display: inline-block;
    width: 92px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    border: 1px solid #FF761C;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    border-radius: 4px;
    /* identical to box height */
    color: #FF761C;
}
.language-change {
    font-family: Miriam Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height */
    color: #0E0E11;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.language-change span {
    display: inline-block;
    background: rgba(10, 6, 73, 0.2);;
    height: 14px;
    width: 1px;
    margin: 0 10px;
}
</style>