"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatic = void 0;
var UserStatic = /** @class */ (function () {
    function UserStatic() {
    }
    UserStatic.prototype.saveAccessToken = function (value) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('access_token', value);
        }
    };
    UserStatic.prototype.getAccessToken = function () {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('access_token');
        }
        else {
            return 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1fQ0paamNiQjdsdTIycV9qYkFpWSJ9.eyJodHRwczovL2FwaS56ZWVyby5uZXR3b3JrL3NlbGxlcl9pZCI6InI4U2RFNG9oVG1CRWJBazNncTVnbGxQMWNlVk03Q0FwIiwiaXNzIjoiaHR0cHM6Ly96ZWVyby1zYW5kYm94LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJyOFNkRTRvaFRtQkViQWszZ3E1Z2xsUDFjZVZNN0NBcEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC56ZWVyby5uZXR3b3JrIiwiaWF0IjoxNjUyMTA0NzE2LCJleHAiOjE2NTIxOTExMTYsImF6cCI6InI4U2RFNG9oVG1CRWJBazNncTVnbGxQMWNlVk03Q0FwIiwic2NvcGUiOiJjb252ZXJzYXRpb246cmVhZCBjb252ZXJzYXRpb246dXBkYXRlIHBheW1lbnRfYWxsb2NhdGlvbjpyZWFkIHBheW1lbnRfYWxsb2NhdGlvbjp1cGRhdGUgZGV2aWNlOnJlYWQgZGV2aWNlOnVwZGF0ZSBvcGVyYXRpb246cmVhZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.qiTp8c5_RdG0JbdSkUvxMuyxRDOOpysUMQJt5XWCGghFrAYcips3krecV-DwJfS9rWKBfYM62LD7danGK2J7ppEvhz_HbuFQl4IoYgQz6K6d3XcI4zz6LjZVz4EMEK8OrkW3sCW5vFiigMYYd8K2GkPTf1OfwT48SHqRuXSmbsk4ruaUPjuWf9ANmLVt0GZcidJ6Io3eaXA900wpITqDjvbPhVPfRCd72kC7GIvF0MWhOwTWFlt9DXOV3qmDXhoVmEnqGOUm6JY8RqbUbSBT99Jm7GEYex_nbwj93U2M02BVhE-XtYqw2oJZImelh1dC_vTcPmGzNdqLSc_P9c8-9Q';
        }
    };
    return UserStatic;
}());
exports.UserStatic = UserStatic;
